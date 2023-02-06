import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='	https://images-assets.nasa.gov/image/PIA15985/PIA15985~medium.jpg' alts="" />

        <div className='home_row'>
          {/* EXAMPLE TO SHOW HOW TO PASS 'prop's into a component*/}
          <Product 
          id={111111}
          title="The Lean Startup" 
          price={19.99} 
          image='https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg' 
          rating={5} />
        </div>

        <div className='home_row'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>

        <div className='home_row'>
        <Product/><Product/>
        <Product/>
        </div>

      </div>
    </div>
  )
}

export default Home