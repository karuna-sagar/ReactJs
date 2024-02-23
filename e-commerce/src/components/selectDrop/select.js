import React, { useState } from 'react'
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isIndex, setIsIndex] = useState(0);
    function openSelect() {
        setIsOpen(!isOpen)
    }
    function closeSelect(index) {
        setIsIndex(index)
        setIsOpen(false)
    }
    return (

        <>
            <div className="selectDropWrapper cursor position-relative">
                <span className='openSelect' onClick={openSelect} >  All Categories <KeyboardArrowDownIcon className='arrow' /></span>

                {isOpen === true &&
                    <div className="selectDrop">
                        <div className="searchField">
                            <input type="text" />
                        </div>
                        <ul className='searchResults'>
                            <li onClick={() => closeSelect(0)} className={`${isIndex === 0 ? 'active' : ""}`} >All Categories</li>
                            <li onClick={() => closeSelect(1)} className={`${isIndex === 1 ? 'active' : ""}`} >Milks and Dairies</li>
                            <li onClick={() => closeSelect(2)} className={`${isIndex === 2 ? 'active' : ""}`} >Wines & Drinks</li>
                            <li onClick={() => closeSelect(3)} className={`${isIndex === 3 ? 'active' : ""}`} >Clothing & beauty</li>
                            <li onClick={() => closeSelect(4)} className={`${isIndex === 4 ? 'active' : ""}`} >Fresh Seafood</li>
                            <li onClick={() => closeSelect(5)} className={`${isIndex === 5 ? 'active' : ""}`} >Pet Foods & Toy</li>
                            <li onClick={() => closeSelect(6)} className={`${isIndex === 6 ? 'active' : ""}`} >Fast food</li>
                            <li onClick={() => closeSelect(7)} className={`${isIndex === 7 ? 'active' : ""}`} >Baking material</li>
                            <li onClick={() => closeSelect(8)} className={`${isIndex === 8 ? 'active' : ""}`} >Vegetables</li>
                            <li onClick={() => closeSelect(9)} className={`${isIndex === 9 ? 'active' : ""}`} >Fresh Fruit</li>
                            <li onClick={() => closeSelect(10)} className={`${isIndex === 10 ? 'active' : ""}`} >Bread and Juice</li>
                            <li onClick={() => closeSelect(11)} className={`${isIndex === 11 ? 'active' : ""}`} >Milks and Dairies</li>
                            <li onClick={() => closeSelect(12)} className={`${isIndex === 12 ? 'active' : ""}`} >Wines & Drinks</li>
                            <li onClick={() => closeSelect(13)} className={`${isIndex === 13 ? 'active' : ""}`} >Clothing & beauty</li>
                            <li onClick={() => closeSelect(14)} className={`${isIndex === 14 ? 'active' : ""}`} >Fresh Seafood</li>
                        </ul>
                    </div>
                }
            </div>

        </>
    )
}

export default Select


