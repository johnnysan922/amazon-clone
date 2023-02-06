import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    // head will contain (left to right): image, search bar, etc (children)
    <div className='header'>
        {/* IMAGE COMPONENT*/}
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>

        {/* SEARCH BAR COMPONENT*/}
        <div className="header_search">
            {/* {TEXTBAR} */}
            <input className='header_searchInput' type='text'/>
            {/* {LOGO} */}
        </div>

        {/* CHILDREN COMPONENT*/}
        <div className='header_nav'>
            <div className='header_option"'>
                <span className='header_optionLine1'> Hello, Guest!</span>
                <span className='header_optionLine2'>Sign In</span>
            </div>

            <div className='head_option"'>
                <span className='header_optionLine1'>Returns</span>
                <span className='header_optionLine2'>& Orders</span>
            </div>

            <div className='head_option"'>
                <span className='header_optionLine1'>Your</span>
                <span className='header_optionLine2'>Prime</span>
            </div>
        </div>

    </div>
  )
}

export default Header