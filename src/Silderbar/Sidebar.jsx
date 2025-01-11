import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import '../Silderbar/sidebar.css'

const Sidebar = () => {
  return (
     <>
       <section className='sidebar'>
          <div>
            <h1>🛒</h1>
          </div>
          <Category/>
          <Price/>
          <Colors/>
       </section>
     </>
  )
}

export default Sidebar
j