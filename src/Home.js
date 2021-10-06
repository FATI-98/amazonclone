import React from 'react'
import './Home.css'
import Video from'./prime-video.jpg'
import Product from'./product.js' 

function Home() {
    return (
        <div className='home'>
          <img 
          className='video-img' src={Video}
          alt=""
          /> 
          <div className="home-row">
            <Product
             id='0'
             title=" The Lean Startup:How constant innovation creates successufl businesses"
             price={29.99}
             image="https://covers.audiobooks.com/images/covers/full/9780307939845.jpg"
            rating={5}/>
            <Product
              id='1'
              title=" Kenwood kMix KMX750WH, Robot Pâtissier, Robot pâtissier multifonctions avec Bol en Acier 5 L, 1000 Watt, Blanc"
              price={255.64}
              image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/kMix%20by%20Kenwood/kMix%20Kitchen%20Machine%20Attachments/KMX750AR/hero-new_800x600.jpg"
              rating={4}
            />  
             
          </div> 
          <div className="home-row">
          <Product
          id={ 2}
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          image="https://m.media-amazon.com/images/I/41xVoS9A5RS._AC_SX679_.jpg"
          rating={3}

          />  
          <Product
          id={3}
          title="Amazon Echo(3rd generation)|Smart speaker with Alexa ,Charcoal Fabric"
          price={239.56}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0z98MPicVaJV1hiwejx2zHuNzqBDl9CvsGg&usqp=CAU"
        
          />  
          <Product
          id={4}
          title="Samsung the 4th generation - gold |12.9inch Wi-fi,128GB"
          price={349.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81qmTTzUlfL._AC_SX679_.jpg"
        
          /> 

          </div>
          <div className="home-row">
          <Product
          id={5}
           title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120*1440"
           price={1094.98}
           rating={4}
           image="https://m.media-amazon.com/images/I/81zYO5NI1ZL._AC_UL320_.jpg"
          />  
          </div>
        
        </div>
    )
}

export default Home


