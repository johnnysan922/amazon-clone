import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db      //navigate through firestone directories
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (       //onSnapShot() is REALTIME
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))    //updates in realtime based on value
            ))
        }
        else{
            setOrders([])       //set basket to empty array
        }
    }, [user])         // `[]` makes useEffect run ONCE

  return (
    <div className='orders'>
        <h1>Your Orders</h1>

        <div className='orders_order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders