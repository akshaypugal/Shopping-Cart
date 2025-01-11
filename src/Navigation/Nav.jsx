import React from 'react'
import '../Navigation/Nav.css'
import { FiHeart , FiShoppingCart  } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'


const Nav = () => {
  return (
     <nav>
       <div className='nav-container'>
        <input
        type='text'
        className='search-input'
        placeholder='Search shoes'
        />
       </div>
       <div className='profile-container'>
          <a href="#">
            <FiHeart className='nav-icons'/>
          </a>
          <a href='#'>
             <FiShoppingCart className='nav-icons'/>
          </a>
          <a href='#'>
             <AiOutlineUserAdd className='nav-icons'/>
          </a>
       </div>
     </nav>
  )
}

export default Nav
