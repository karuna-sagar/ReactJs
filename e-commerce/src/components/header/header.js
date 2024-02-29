import React, { useEffect, useState } from 'react'
import '../header/Header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import IconUser from '../../assets/images/icon-user.svg';
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
    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    }, []);

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                if (res !== null) {
                    // console.log(res.data.data);
                    res.data.data.map((item, index) => {
                        countryList.push(item.country);
                        // console.log(item.country)
                    })

                    //console.log(res.data.data[0].country)
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={Logo} alt="Logo" />
                        </div>
                        {/* headerSearch start here */}
                        <div className="col-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                <Select data={categories} placeholder="All Categories" />

                                <div className="search">
                                    <input type="text" placeholder='Search for item..' />
                                    <SearchIcon className='searchIcon cursor' icon={false} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 d-flex align-items-center">
                            <div className='countryWrapper '>
                                <Select data={countryList} placeholder="Your Location" icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />} />
                            </div>
                            <ul className='list list-inline mb-0 headerTabs'>
                                <li className='list-inline-item'>
                                    <span>
                                        <img src={IconCompare} alt='Compare' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Compare
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span>
                                        <img src={IconHeart} alt='Heart' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Wishlist
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span>
                                        <img src={IconCart} alt='Cart' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Cart
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span>
                                        <img src={IconUser} alt='User' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Account
                                    </span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header

