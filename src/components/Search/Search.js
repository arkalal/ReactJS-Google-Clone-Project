import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = ({ hidebuttons }) => {
    return (
        <form action="" className='search'>
            <div className="search-input">
                <SearchIcon className='searchicon'></SearchIcon>
                <input type="text" />
                <MicIcon></MicIcon>
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
