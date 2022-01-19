import React from 'react'
import { Link } from 'react-router-dom'
import './SearchOptions.css'

const SearchOptions = ({ Icon, title, link }) => {
    return (
        <div className='options-component'>
            {Icon && <Icon className='option-icon' ></Icon>}
            <Link to={link} className='option-title'> {title} </Link>
        </div>
    )
}

export default SearchOptions
