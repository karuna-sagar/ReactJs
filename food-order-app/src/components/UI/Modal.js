import classes from './Modal.module.css'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
const Backdrop = (props) => {
    return <div className={classes.backdrop} />
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className="classes content">{props.children}</div>
    </div>
}
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        </Fragment>
    )
}

export default Modal
