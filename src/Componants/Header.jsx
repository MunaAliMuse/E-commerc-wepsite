import React from 'react'
import { useState } from 'react'

function Header() {
   const[isOpen, setisOpen] = useState(false)
   const handleisOpen =() => {
    setisOpen(true)
   }
   const handleClose =() => {
    setisOpen(false)
   }

  return (
    <div className='bg-thirtycolor flex text-white p-5 justify-between'>
      <h1 className='font-bold text-2xl sm:text-4xl'>E-commerce</h1>
      <i onClick={handleisOpen} style={{display:isOpen === true ? "none" : ""}} class="fa-solid fa-bars absolute right-2 text-3xl sm:hidden text-white"></i>

    <i onClick={handleClose} style={{display:isOpen ===true ? "block" : "none"}} class="fa-solid fa-x  hidden absolute right-2 text-4xl text-white "></i>

      <ul  style={{display:isOpen === true ? "block" : ""}}  className=' hidden sm:flex flex-col   sm:flex-row gap-5 mt-10 sm:mt-0 sm:gap-20 text-4xl'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ol className='text-4xl mr-[80px] '>
         <i class="fa-solid fa-cart-shopping"></i>
      </ol>
    </div>
  )
}

export default Header
