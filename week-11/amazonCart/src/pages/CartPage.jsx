import React from 'react'
import Navbar from '../components/Navbar'
import { useRecoilState } from 'recoil'
import { cartItemState } from '../store/atoms/cartItemState'
import ShoppingCartCard from '../components/ShoppingCartCard'

function cartPage() {
  const cartItems = useRecoilState(cartItemState)
  
  return (
    <div>
        <Navbar />
        {cartItems.map(item => {
          return <ShoppingCartCard item={item}/>
        })}
    </div>
  )
}

export default cartPage