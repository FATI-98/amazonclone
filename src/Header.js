import React from 'react'
import './header.css'
import Logo from'./amazon_logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import{Value} from './StateProvider.js'
import{auth} from'./firebase';


function Header() {
   const [{basket,user},dispatch]=Value();
   
   const handleAuthentication=()=>{
     
     if(user){ 
        auth.signOut();
     }
   }

    return (
        <div className='header'>
          <Link to="/">
           <img className="header-logo" alt="logo" src={Logo}
           /> 
          </Link>  
          <div className='header-search'>
              <input className="header-searchInput"
               type="text" />
               <SearchIcon className="header-searchIcon"/>
                
          </div>
          <div className="header-nav">
               <Link to={!user &&'/Login' }> 
               <div onClick={handleAuthentication} className="header-option">
                 <span className="header-optionLineOne"><small>{!user?'Hello,Guest':user?.email}</small></span>
                 <span className="header-optionLineTow"> <strong>{user?'Sign out':'Sign in'} </strong></span>
               
               </div>
               </Link>
               <Link  to ='/orders'>
               <div  className="header-option">
                 <span className="header-optionLineOne"><small>Returns</small></span>
                 <span className="header-optionLineTow"><strong>& Order</strong> </span>
               </div>
               </Link>
               <div  className="header-option">
                  <span className="header-optionLineOne"><small>Your</small></span>
                  <span className="header-optionLineTow"><strong>Prime</strong></span>
               </div>
               <Link to='/checkout'>
                  <div className="header-optionBasket">
                     <ShoppingCartIcon className="ShoppingCartIcon"/>  
                     <span className="header-optionLineTow header-basketCount"><strong>{basket?.length}</strong></span>
                  </div>
               </Link>
           </div>
        </div>
    )
}

export default Header
