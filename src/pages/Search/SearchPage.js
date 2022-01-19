import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/Search/Search'
import SearchOptions from './options/SearchOptions'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage-header">
                <Link to='/'>
                    <img src="https://www.google.co.in/logos/doodles/2022/get-vaccinated-wear-a-mask-save-lives-january-18-copy-6753651837109684-law.gif" alt="" />
                </Link>

                <div className="searchPage-headerBody">
                    <Search hidebuttons></Search>

                    <div className="searchPage-options">
                        <div className="searchPage-optionsLeft">
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                        </div>

                        <div className="searchPage-optionsRight">
                            <SearchOptions></SearchOptions>
                            <SearchOptions></SearchOptions>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
