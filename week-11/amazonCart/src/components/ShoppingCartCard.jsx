import React from 'react'

function ShoppingCartCard({item}) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="bg-[url(item.image)] h-20 w-20"></div>
        <div className=""></div>
      </div>
      <div></div>
    </div>
  )
}

export default ShoppingCartCard