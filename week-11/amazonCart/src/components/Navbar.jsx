import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartItemState } from '../store/atoms/cartItemState'

function Navbar() {
  const cartItem = useRecoilValue(cartItemState)
  return (
    <div className="flex justify-between">
      <div>amazon.in</div>
      <div>
        <p>Hello, user</p>
        <button>cart {cartItem.length}</button>
      </div>
    </div>
  )
}

export default Navbar