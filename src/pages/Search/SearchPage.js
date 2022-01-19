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
                    <Search hidebuttons ExtraIcon={SearchIcon} Style='search-mic' SearchBorder='search-border'></Search>

                    <div className="searchPage-options">
                        <div className="searchPage-optionsLeft">
                            <SearchOptions Icon={SearchIcon} link='/all' title='All'></SearchOptions>
                            <SearchOptions Icon={DescriptionIcon} link='/all' title='News'></SearchOptions>
                            <SearchOptions Icon={ImageIcon} link='/all' title='Images'></SearchOptions>
                            <SearchOptions Icon={LocalOfferIcon} link='/all' title='Shopping'></SearchOptions>
                            <SearchOptions Icon={RoomRoundedIcon} link='/all' title='Maps'></SearchOptions>
                            <SearchOptions Icon={MoreVertIcon} link='/all' title='More'></SearchOptions>
                        </div>

                        <div className="searchPage-optionsRight">
                            <SearchOptions link='/settings' title='Settings'></SearchOptions>
                            <SearchOptions link='/tools' title='Tools'></SearchOptions>
                        </div>
                    </div>
                </div>
            </div>

            <div className="searchPage-results">
                <p className="searchPage-resultCount">
                    About 8,880,000 results (0.57) for camel coder
                </p>

                <div className="searchPage-result">
                    <a href="" className='searchPage-resultLink'>
                        <img src="https://i1.sndcdn.com/avatars-000297590619-74sb08-t240x240.jpg" alt="" />
                        github.com
                    </a>

                    <a href="" className='searchPage-resultTitle'>
                        <h2>Just a test title</h2>
                    </a>

                    <p className='searchPage-resultDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, deleniti.</p>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
