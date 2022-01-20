import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchEnter } from '../../reduxF/searchSlice';

const Search = ({ hidebuttons, ExtraIcon, Iconsearch, Style, SearchBorder }) => {

    const dispatch = useDispatch()

    const [Input, SetInput] = useState('')

    const navigate = useNavigate()

    const searchMe = (e) => {
        e.preventDefault()
        dispatch(searchEnter({
            value: Input
        }))
        navigate('/search')
    }

    return (
        <form action="" className='search'>

            <div className="search-input">
                {Iconsearch && <Iconsearch className='searchIcon-home'></Iconsearch>}

                <input type="text" value={Input} onChange={(e) => { SetInput(e.target.value) }} />

                <div className={SearchBorder}>
                    <MicIcon className={Style} ></MicIcon>
                    {ExtraIcon && <ExtraIcon className='extra-icon'></ExtraIcon>}
                </div>
            </div>

            {
                !hidebuttons ? (<div className="search-buttons">
                    <button className="searchBtn" type='submit' onClick={searchMe}>Google Search</button>
                    <button className="searchBtn">I'm Feeling Lucky</button>
                </div>) : (
                    <div className="search-buttons" style={{ display: 'none' }}>
                        <button className="searchBtn" type='submit' onClick={searchMe}>Google Search</button>
                    </div>
                )
            }

        </form>
    )
}

export default Search
