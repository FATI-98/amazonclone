import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import {Value} from './StateProvider.js'
import {gettotalprice} from './reducer.js';
import{useHistory}from 'react-router-dom'

function Subtotal() {
    const [{basket},dispatch]=Value();
    const history=useHistory();
    const userAdress=(e)=>{
        e.preventDefault();
        history.push('/payment');
       
    }
    
    return(
      <div className="subtotal">
          <CurrencyFormat
             renderText={(value)=>(
              <>
                <p>
                    Subtotal({basket?.length} items) : <strong> {value}</strong> 
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                <button onClick={userAdress}>Procceed to checkout</button>
              </>
               
             )}
              decimalScale={2}
              value={gettotalprice(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"€"}
            />  
        </div> 
    );

}

export default Subtotal
