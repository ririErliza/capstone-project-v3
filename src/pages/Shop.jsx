import React from 'react'
import ShopComponent from '../components/ShopComponent'
import { CartProvider } from "react-use-cart";

const Shop = () => {
  return (
    <div>
      <CartProvider>
        <ShopComponent/>
      </CartProvider>
    </div>
  )
}

export default Shop