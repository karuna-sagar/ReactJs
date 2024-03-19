import React from 'react'
import cartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton'
function HeaderCartButton() {
  return (
    <button className={classes.button} >
      <span className={classes.icon}>
        <cartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
