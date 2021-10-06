import React from 'react'
import './checkout.css'
import Subtotal from'./Subtotal'
import CheckoutProduct from './CheckoutProduct';
import {Value} from './StateProvider'

function Checkout() {
    const[{basket,user},dispatch]=Value();
    return (
        <div className="checkout">
          <div className="checkout-header">

           <div className="checkout-left">
               <img className='checkout-ad'
               src='https://gos3.ibcdn.com/bann-1553077574.jpg'
               alt=''
               />
           </div>
           <div className="checkout-right">
              <Subtotal/>
           </div>
          </div> 
           <div className="checkout-title">
                   <h3>Hello :{user?.email}</h3>
                   <h2>Your Shopping Basket</h2>
                   
               </div>
               <div className="checkout-basket">
                   {basket.map(item =>(
                    <CheckoutProduct
                     id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                   ))
                    }
                   
               </div>
        </div>
    )
}

export default Checkout

