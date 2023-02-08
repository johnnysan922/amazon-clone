import React from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

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
                </div>

                <div className='payment_detail'>
                    {/* STRIPE */}
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Payment