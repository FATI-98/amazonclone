import React from 'react'
import './checkoutProduct.css'
import {Value} from './StateProvider'


function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=Value();

   const removeproduct=(basket)=>{
       dispatch({
        type:'remove-from-basket',
        id:id,
               
      });
      
   }

    
    return (
        <div className='checkoutProduct'>
          
              <img className='checkoutProduct-image'
              src={image} alt=''
              />
            
            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct-rating'>
                    { Array(rating)
                      .fill()
                      .map((_,i)=>(
                          <span><small>⭐</small></span>
                      ))
                    }
                </p>
                <button onClick={removeproduct}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct

