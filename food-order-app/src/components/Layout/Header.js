import React from 'react'
import mealImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']} >
                <img src={mealImage} alt="A Table Full of Delicious Food !" />
            </div>
        </React.Fragment>
    )
}

export default Header
