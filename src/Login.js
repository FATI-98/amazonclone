import React, {useState} from 'react';
import './login.css';
import { Link,useHistory} from 'react-router-dom';
import {auth} from './firebase'


function Login() {


    const history=useHistory();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))
    }
    const  register=e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it sucsessfully created a new user with email and password
           console.log('auth>>>>>>>>>>>>>>>',auth)
            if(auth){
                history.push('/')
            }
            
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
             <img className="login-logo"
             src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
             alt=""
             />
            </Link>
            <div className="login-container">
                <h2>Sign In</h2>
                <form>
                   <h5>E-mail</h5>
                   <input type='text'value={email} placeholder="   name@gmail.com"onChange={e=>setEmail(e.target.value)}/>
                   <h5>Password</h5>
                   <input type="password" value={password}placeholder="   **************" onChange={e=>setPassword(e.target.value)}/>
                   <button type="submit"className="login-signInButton" onClick={signIn}> Sign In</button>
                </form>
                <p>By siging-in you agree to the AMAZON FAKE CLONE Conditons of Use & Sale.Please see our Privacy Notice ,our cookies Notice and our Interest-based Ads</p>
                <button type="submit"className="login-registerButton" onClick={register}> Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
