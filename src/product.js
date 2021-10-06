import React from 'react';
import'./product.css';
import {Value} from'./StateProvider.js';
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

function product({id, title, price, image, rating}) {

  const [{basket }, dispatch]=Value();
   console.log('this is the basket:'+basket);

  const addtobasket=()=>{
    dispatch({
      type:'add-to-basket',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
    return (
        <div className="product">
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={100}
            defaultPositionY={200}
          >  
            <TransformComponent>
              <img
                 src={image}
                 style={{width:"100%"}}
                 alt=''
              />
            </TransformComponent>
          </TransformWrapper>  
          <div className="product-info">
           <p className="product-price">
             <strong>{price}</strong>
             <small>€</small>

            </p>
            <p className="title">{title}</p>
            <div className="product-rating">
              {Array(rating)
              .fill()
              .map((_,i)=>(
                <span><small>⭐</small></span>
              ))
              }
              
            </div>
          </div>
          <button onClick={addtobasket}>add to basket</button>   

         
        </div>
    )
}

export default product
