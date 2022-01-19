import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
    return (
        <form action="" className='search'>
            <div className="search-input">
                <SearchIcon></SearchIcon>
                <input type="text" />
                <MicIcon></MicIcon>
            </div>
        </form>
    )
}

export default Search
