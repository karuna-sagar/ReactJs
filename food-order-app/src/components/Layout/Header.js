import React from 'react'
import mealImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                {/* <button>Cart</button> */}
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']} >
                <img src={mealImage} alt="A Table Full of Delicious Food !" />
            </div>
        </React.Fragment>
    )
}

export default Header
