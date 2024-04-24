import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='flex items-start justify-between gap-[50px] mt-[max(8vh,30px)]'>
      <div className='w-full max-w-[max(30%,500px)] placeorder-left'>
        <div className='text-[30px] font-semibold mb-[35px]'>Delivery Information</div>
        <div className='placeorder-multi-input'>
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Street' required />
        <div className='placeorder-multi-input'>
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className='placeorder-multi-input'>
          <input type="text" placeholder='Zip/Postal Code' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="tel" placeholder='Phone Number' required />
      </div>
      <div className='w-full max-w-[max(40%,500px)]'>
        <h2 className='mb-3'>Cart Totals</h2>
        <div>
          <div className='cart-total-details'>
            <div>SubTotal</div>
            <div>${getTotalCartAmount()}</div>
          </div>
          <hr className='m-[10px_0px]' />
          <div className='cart-total-details'>
            <div>Delivery Fee</div>
            <div>${getTotalCartAmount()===0?0:1}</div>
          </div>
          <hr className='m-[10px_0px]' />
          <div className='cart-total-details'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()===0?0:getTotalCartAmount() + 1}</h3>
          </div>
        </div>
        <button className='cart-total-proceed mt-7'>PROCEED TO PAYMENT</button>
      </div>
    </form>
  )
}

export default PlaceOrder
