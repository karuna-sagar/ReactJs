import React, { useState } from 'react'
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Select = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(props.placeholder);
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
                    <LocationOnOutlinedIcon style={{ opacity: "0.5" }} />
                    <span className='openSelect' onClick={openSelect} >  {selectedItem} <KeyboardArrowDownIcon className='arrow' /></span>

                    {isOpen === true &&
                        <div className="selectDrop">
                            <div className="searchField">
                                <input type="text" placeholder="Search Here..." />
                            </div>
                            <ul className='searchResults'>
                                <li key={0} onClick={() => closeSelect(0, props.placeholder)} className={`${isIndex === 0 ? 'active' : ""}`} >{props.placeholder}</li>
                                {
                                    props.data.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => closeSelect(index + 1, item)} className={`${isIndex === index + 1 ? 'active' : ""}`} >{item}</li>
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


