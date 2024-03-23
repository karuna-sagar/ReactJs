import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = (props) => {
    const cartItem = <ul className={classes['cart-items']}>{[{ id: '1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => <li key={item.id}> {item.name}</li>)
    }</ul>
    return (
        <Modal onClose={props.onClose} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.33</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart