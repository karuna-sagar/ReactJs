import React, { useState } from 'react'
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("All categories");
    const [isIndex, setIsIndex] = useState(0);
    function openSelect() {
        setIsOpen(!isOpen)
    }

    const closeSelect = (index, name) => {
        setIsIndex(index)
        setIsOpen(false)
        setSelectedItem(name);
    }
    return (

        <>
            <div className="selectDropWrapper cursor position-relative">
                <span className='openSelect' onClick={openSelect} >  {selectedItem} <KeyboardArrowDownIcon className='arrow' /></span>

                {isOpen === true &&
                    <div className="selectDrop">
                        <div className="searchField">
                            <input type="text" />
                        </div>
                        <ul className='searchResults'>
                            <li onClick={() => closeSelect(0, 'All Categories')} className={`${isIndex === 0 ? 'active' : ""}`} >All Categories</li>
                            <li onClick={() => closeSelect(1, 'Milks and Dairies')} className={`${isIndex === 1 ? 'active' : ""}`} >Milks and Dairies</li>
                            <li onClick={() => closeSelect(2, "Wines & Drinks")} className={`${isIndex === 2 ? 'active' : ""}`} >Wines & Drinks</li>
                            <li onClick={() => closeSelect(3, "Clothing & beauty")} className={`${isIndex === 3 ? 'active' : ""}`} >Clothing & beauty</li>
                            <li onClick={() => closeSelect(4, "Fresh Seafood")} className={`${isIndex === 4 ? 'active' : ""}`} >Fresh Seafood</li>
                            <li onClick={() => closeSelect(5, "Pet Foods & Toy")} className={`${isIndex === 5 ? 'active' : ""}`} >Pet Foods & Toy</li>
                            <li onClick={() => closeSelect(6, "Fast food")} className={`${isIndex === 6 ? 'active' : ""}`} >Fast food</li>
                            <li onClick={() => closeSelect(7, "Baking material")} className={`${isIndex === 7 ? 'active' : ""}`} >Baking material</li>
                            <li onClick={() => closeSelect(8, "Vegetables")} className={`${isIndex === 8 ? 'active' : ""}`} >Vegetables</li>
                            <li onClick={() => closeSelect(9, "Fresh Fruit")} className={`${isIndex === 9 ? 'active' : ""}`} >Fresh Fruit</li>
                            <li onClick={() => closeSelect(10, "Bread and Juice")} className={`${isIndex === 10 ? 'active' : ""}`} >Bread and Juice</li>
                            <li onClick={() => closeSelect(11, "Milks and Dairies")} className={`${isIndex === 11 ? 'active' : ""}`} >Milks and Dairies</li>
                            <li onClick={() => closeSelect(12, "Wines & Drinks")} className={`${isIndex === 12 ? 'active' : ""}`} >Wines & Drinks</li>
                            <li onClick={() => closeSelect(13, "Clothing & beauty")} className={`${isIndex === 13 ? 'active' : ""}`} >Clothing & beauty</li>
                            <li onClick={() => closeSelect(14, "Fresh Seafood")} className={`${isIndex === 14 ? 'active' : ""}`} >Fresh Seafood</li>
                        </ul>
                    </div>
                }
            </div>

        </>
    )
}

export default Select


