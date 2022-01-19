import React from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';

const Search = ({ hidebuttons, ExtraIcon, Iconsearch, Style, SearchBorder }) => {
    return (
        <form action="" className='search'>

            <div className="search-input">
                {Iconsearch && <Iconsearch></Iconsearch>}
                <input type="text" />
                <div className={SearchBorder}>
                    <MicIcon className={Style} ></MicIcon>
                    {ExtraIcon && <ExtraIcon className='extra-icon'></ExtraIcon>}
                </div>
            </div>

            {
                !hidebuttons && (<div className="search-buttons">
                    <button className="searchBtn" type='submit'>Google Search</button>
                    <button className="searchBtn">I'm Feeling Lucky</button>
                </div>)
            }

        </form>
    )
}

export default Search
