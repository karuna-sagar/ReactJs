import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
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
                        <div className="col-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                <Select data={categories} placeholder="All Categories" />

                                <div className="search">
                                    <input type="text" placeholder='Search for item..' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className='countryWrapper d-flex align-items-center'>
                                <Select data={countryList} placeholder="Your Location" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header