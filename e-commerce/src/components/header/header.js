import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.svg'
const Header = () => {
    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
