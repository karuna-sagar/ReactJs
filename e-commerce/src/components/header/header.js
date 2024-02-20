import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';

const Header = () => {
    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="col-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                <div className="selecrDrop cursor position-relative">
                                    All Categories
                                    <Select />
                                </div>
                                <div className="search">
                                    <input type="text" placeholder='Search for item..' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
