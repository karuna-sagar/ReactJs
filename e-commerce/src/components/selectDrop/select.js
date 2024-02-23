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
                            <li onClick={() => setIsOpen(false)} >Milks and Dairies</li>
                            <li onClick={() => setIsOpen(false)} >Wines & Drinks</li>
                            <li onClick={() => setIsOpen(false)} >Clothing & beauty</li>
                            <li onClick={() => setIsOpen(false)} >Fresh Seafood</li>
                            <li onClick={() => setIsOpen(false)} >Pet Foods & Toy</li>
                            <li onClick={() => setIsOpen(false)} >Fast food</li>
                            <li onClick={() => setIsOpen(false)} >Baking material</li>
                            <li onClick={() => setIsOpen(false)} >Vegetables</li>
                            <li onClick={() => setIsOpen(false)} >Fresh Fruit</li>
                            <li onClick={() => setIsOpen(false)} >Bread and Juice</li>
                            <li onClick={() => setIsOpen(false)} >Milks and Dairies</li>
                            <li onClick={() => setIsOpen(false)} >Wines & Drinks</li>
                            <li onClick={() => setIsOpen(false)} >Clothing & beauty</li>
                            <li onClick={() => setIsOpen(false)} >Fresh Seafood</li>
                        </ul>
                    </div>
                }
            </div>

        </>
    )
}

export default Select


