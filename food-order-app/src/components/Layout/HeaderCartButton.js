import React from 'react'
import cartIcon from '../Cart/CartIcon'
function HeaderCartButton() {
  return (
    <button>
      <span>
        <cartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  )
}

export default HeaderCartButton
