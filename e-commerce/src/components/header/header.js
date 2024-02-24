import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';

const Header = () => {
    const [categories, setcategories] = useState([
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast food',
        'Baking material',
        'Vegetables',
        'Fresh Fruit',
        'Bread and Juice',
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood'
    ]);
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
                                <Select data={categories} />

                                <div className="search">
                                    <input type="text" placeholder='Search for item..' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <Select />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
