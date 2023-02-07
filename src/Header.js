import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();

  return (
    // head will contain (left to right): image, search bar, etc (children)
    <div className='header'>

        {/* IMAGE COMPONENT*/}
        <Link to='/'>       {/* MAKES IMAGE REDIRECT TO ROOT PAGE */}
            <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
        </Link>

        {/* SEARCH BAR COMPONENT*/}
        <div className="header_search">
            {/* {TEXTBAR} */}
            <input className='header_searchInput' type='text'/>
            {/* {LOGO} */}
            <SearchIcon className='header_searchIcon' />
        </div>

        {/* CHILDREN COMPONENT*/}
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLine1'>Hello, Guest!</span>
                <span className='header_optionLine2'>Sign In</span>
            </div>

            <div className='header_option'>
                <span className='header_optionLine1'>Returns</span>
                <span className='header_optionLine2'>& Orders</span>
            </div>

            <div className='header_option'>
                <span className='header_optionLine1'>Your</span>
                <span className='header_optionLine2'>Prime</span>
            </div>

            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLine2 header_basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>

    </div>
  )
}

export default Header