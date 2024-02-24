import React, { useState } from 'react'
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Select = (props) => {
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
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <div className="selectDropWrapper cursor position-relative">
                    <span className='openSelect' onClick={openSelect} >  {selectedItem} <KeyboardArrowDownIcon className='arrow' /></span>

                    {isOpen === true &&
                        <div className="selectDrop">
                            <div className="searchField">
                                <input type="text" placeholder="Search Here..." />
                            </div>
                            <ul className='searchResults'>
                                {
                                    props.data.map((item, index) => {
                                        return (
                                            <li onClick={() => closeSelect(index, item)} className={`${isIndex === index ? 'active' : ""}`} >{item}</li>
                                        )
                                    })
                                }


                            </ul>
                        </div>
                    }
                </div>
            </ClickAwayListener>
        </>
    )
}

export default Select


