import React, {useState, useEffect} from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    //HOOKS
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    //VERY IMPORTANT PIECE OF CODE
    useEffect(() => {
        //generaate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
                //Stripe expects the total in currencies subunits
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('The secret is >>>', clientSecret)

    // CUSTOMER PURCHASES BASKET (reuse-able)
    const handleSubmit = async (event) => {
        //do all fancy stripe stuff
        event.preventDefault()
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent == payment confirmation

            // push orders into firestone database (THIS IS ALL THE CODE)
            db
            .collection('users')
            .doc(user?.uid)     // `user.uid` is different from `user.id`
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            ////////////////////////////////////////////////////
             
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true })
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);    //if event is empty, buttons is disabled
        setError(event.error? event.error.message : ""); //show error if any
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1 className='checkout_title'>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>

            {/* PAYMENT SECTION - delivery address*/}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address:</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            {/* PAYMENT SECTION - Review items*/}
            <div className='payment_section'>

                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                
                <div className='payment_items'>
                    {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/> 
                    ))}
                </div>

            </div>

            {/* PAYMENT SECTION - Payment method*/}
            <div className='payment_section'>

                <div className='payment_title'>
                    <h3>Payment method</h3>
                    <h2>(Keep typing '42' for card details)</h2>
                </div>

                <div className='payment_details'>
                    {/* STRIPE */}
                    <form onSubmit={handleSubmit}>

                        <CardElement onChange={handleChange} />

                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                                renderText={(value) =>(
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}  //iterates thru basket and adds prices to 'value'
                                displayType='text'
                                thousandSeparator={true}
                                prefix='$'
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {/* ERROR */}
                        {error && <div>{error}</div>}

                    </form>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Payment