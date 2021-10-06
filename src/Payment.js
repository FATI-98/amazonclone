import React ,{useState,useEffect}from 'react';
import './payment.css'
import {Value}from './StateProvider'
import CheckoutProduct from './CheckoutProduct.js'
import {Link,useHistory}from "react-router-dom"
import {gettotalprice} from './reducer.js'
import CurrencyFormat from "react-currency-format";
import{CardElement,useStripe,useElements} from'@stripe/react-stripe-js'
import axios  from './axios'
import{db} from './firebase'

function Payment() {
    const[{basket,user},dispatch]=Value();
    
    const history=useHistory();
    const stripe=useStripe();
    const elements=useElements();

    const [succeeded,setSucceeded]=useState(false);
    const[processing,setProcessing]=useState("");
    const[clientSecret,setClientSecret]=useState(true);

    const [error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);

    useEffect(()=>{
        //generate the special stripe secretwich allows us to charge a customer
        const getClientSecret=async()=>{
            const response = await axios({
                method:'post',
                url:`http://localhost:5000/payments/create?total=${gettotalprice(basket)*100}`
            })  
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])
    console.log('the secrect is>>>>>>',clientSecret);

    const handleSubmit= async(event)=>{
      //do all the fancy stripe stuff......
      event.preventDefault();
      setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confirmation
            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 basket:basket,
                 amount:paymentIntent.amount,
                 created:paymentIntent.created
             })
            setSucceeded(true);
            setProcessing(false);
            setError(null);
            
            dispatch({
                type:'empty-basket'
            })
            history.replace('/orders');
        });

    };
    const handleChange=event=>{
       // listen for changes in the cardElement
       //and display any errors as the custmor types their card details
        setDisabled(event.empty);
        setError(event.error?event.error.message:'');
    };
    return (

        <div className="payment">
            <h2>CheckOut ( <Link to="/checkout"><strong>{ basket?.length} Items</strong></Link> )</h2>  
            <div  className="payment-container">
                <div className="payment-section">
                    <div className="payment-title">
                    <h3>Delivery Address</h3>
                    </div>
                    <div className="address">
                        <p> {user?.email}</p>
                        <p>Los Angeles 1234street</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title"> 
                    <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='item'>
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
                <div className="payment-section">
                    <div className="payment-title">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment-price">
                               <CurrencyFormat
                                  renderText={(value)=>(
                                    
                                    <h3>Order Total : { value }</h3> 

                                   )}
                                   decimalScale={2}
                                    value={gettotalprice(basket)}
                                   displayType={"text"}
                                   thousandSeparator={true}
                                   prefix={"€"}
                                />  
                                <button disabled={processing|| disabled ||succeeded}>
                                 <span>{processing?<p>Processing</p>:'Buy Now'}</span>
                                </button> 
                            </div> 
                            {error &&<div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Payment

