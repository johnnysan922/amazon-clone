import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://wallpapers.com/images/featured/npcp6jc782ixp9zs.jpg' alts="" />

        <div className='home_row'>
          {/* EXAMPLE TO SHOW HOW TO PASS 'prop's INTO A COMPONENT*/}
          <Product 
          id={111111} 
          title="Gaming PC bundle (mouse and keyboard included)" 
          price={1599.99} 
          image='https://m.media-amazon.com/images/I/819XYUimTuL.jpg' 
          rating={5} 
          />
          <Product id={111119} title="SONY Playstation 5 (controller included)" price={599.99} image='https://media.gamestop.com/i/gamestop/11108140/Sony-PlayStation-5-Console?$pdp2x$$&fmt=webp' rating={4} 
          />
          	
        </div>

        <div className='home_row'>
          <Product id={111112} title="The Lean Startup"  price={19.99} image='https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg' rating={3} />
          <Product id={111114} title="Dacoity Gaming Keyboard"  price={99.99} image='https://m.media-amazon.com/images/I/715XLKbQnFL._AC_UY327_FMwebp_QL65_.jpg' rating={4} />
          <Product id={111115} title="Logitech G PRO X Gaming Headset"  price={59.99} image='	https://m.media-amazon.com/images/I/71mm1J9608L._AC_UY327_FMwebp_QL65_.jpg' rating={3} />
          <Product id={111117} title="Metal Steel Folding Fold Up GAMING Chair"  price={40.99} image='https://m.media-amazon.com/images/I/617MXg4nMxL._AC_UL480_FMwebp_QL65_.jpg' rating={1} />
        </div>

        <div className='home_row'>
        <Product id={111113} title="SAMSUNG 23.5” CF396 Curved Computer Monitor"  price={199.99} image='https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UY327_FMwebp_QL65_.jpg' rating={3} />
        <Product id={111116} title="Logitech G502 HERO High Performance Wired Gaming Mouse"  price={35.59} image='https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg' rating={5} />
        <Product id={111118} title="Logitech G435 LIGHTSPEED and Bluetooth Wireless Gaming Headset"  price={49.88} image='https://m.media-amazon.com/images/I/81bQEkMevBL._AC_UY327_FMwebp_QL65_.jpg' rating={4} />
        </div>

      </div>
    </div>
  )
}

export default Home