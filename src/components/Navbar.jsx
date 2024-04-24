import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount } = useContext(StoreContext)


  return (
    <div className='flex justify-between items-center py-5 sticky top-0 z-50 border bg-transparent backdrop-blur-[8px]'>
      <Link to={'/'}><img className='w-[150px] max-[950px]:w-[130px] max-[400px]:w-[110px]' src={assets.logo} alt="" /></Link>
      <ul className='flex gap-5 text-[#49557e] text-lg max-[950px]:text-base max-[950px]:gap-4 max-[755px]:hidden'>
        <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "navMenu_underline" : "cursor-pointer"} >Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "navMenu_underline" : "cursor-pointer"} >Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "navMenu_underline" : "cursor-pointer"} >Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "navMenu_underline" : "cursor-pointer"} >Contact Us</a>
      </ul>
      <div className='flex items-center gap-10 max-[950px]:gap-5 max-[400px]:gap-3'>
        <img className='max-[950px]:w-[21px] max-[400px]:w-[17px]' src={assets.search_icon} alt="" />
        <div className='relative'>
          <Link to='/cart'><img className='max-[950px]:w-[24px] max-[400px]:w-[19px] cursor-pointer' src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"navCart_dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className='text-base text-[#49557e] border border-[tomato] p-[10px_30px] rounded-[50px] cursor-pointer transition-[0.1s] hover:bg-[#fff4f2] max-[950px]:p-[7px_16px] max-[950px]:text-[15px] max-[400px]:p-[1px_10px] max-[400px]:text-center max-[400px]:text-[12px]'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
