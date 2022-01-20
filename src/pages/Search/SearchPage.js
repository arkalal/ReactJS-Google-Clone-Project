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
import { useSelector } from 'react-redux'
import useGoogleSearch from '../../useGoogleSearch'

const SearchPage = () => {

    const searchStore = useSelector((state) => state.search.value)
    const { Data } = useGoogleSearch(searchStore.value)
    console.log(Data)

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
            {
                searchStore.value &&

                (<div className="searchPage-results">
                    <p className="searchPage-resultCount">
                        About {Data?.searchInformation.formattedTotalResults} results ({Data?.searchInformation.formattedSearchTime}) for {searchStore.value}
                    </p>

                    {
                        Data?.items.map((item) => {
                            return (
                                (<div className="searchPage-result">
                                    <a href={item.Link} className='searchPage-resultLink'>
                                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img src={item.pagemap?.cse_image[0]?.src} alt="" />
                                        )}
                                        {item.displayLink}
                                    </a>

                                    <a href={item.Link} className='searchPage-resultTitle'>
                                        <h2> {item.title} </h2>
                                    </a>

                                    <p className='searchPage-resultDescription'> {item.snippet} </p>
                                </div>)
                            )
                        })
                    }


                </div>)
            }
        </div>
    )
}

export default SearchPage
