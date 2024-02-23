import React, { useState } from 'react'
import '../selectDrop/select.css'
const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    function openSelect() {
        setIsOpen(!isOpen)
    }
    return (

        <>
            <div className="selectDropWrapper cursor position-relative">
                <span className='openSelect' onClick={openSelect} >All Categories</span>

                {isOpen === true &&
                    <div className="selectDrop">
                        <div className="searchField">
                            <input type="text" />
                        </div>
                        <ul className='searchResults'>
                            <li>Milks and Dairies</li>
                            <li>Wines & Drinks</li>
                            <li>Clothing & beauty</li>
                            <li>Fresh Seafood</li>
                            <li>Pet Foods & Toy</li>
                            <li>Fast food</li>
                            <li>Baking material</li>
                            <li>Vegetables</li>
                            <li>Fresh Fruit</li>
                            <li>Bread and Juice</li>
                            <li>Milks and Dairies</li>
                            <li>Wines & Drinks</li>
                            <li>Clothing & beauty</li>
                            <li>Fresh Seafood</li>
                        </ul>
                    </div>
                }
            </div>

        </>
    )
}

export default Select


