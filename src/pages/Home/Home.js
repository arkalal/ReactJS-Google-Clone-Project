import React from 'react'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../../components/Search/Search';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-header">
                <div className="home-headerLeft">
                    <p>About</p>
                    <p>Store</p>
                </div>
                <div className="home-headerRight">
                    <p>Gmail</p>
                    <p>Images</p>
                    <div className="app-icon">
                        <AppsIcon></AppsIcon>
                    </div>
                    <div className="avatar">
                        <Avatar></Avatar>
                    </div>
                </div>
            </div>

            <div className="home-body">
                <img src="https://www.google.co.in/logos/doodles/2022/get-vaccinated-wear-a-mask-save-lives-january-18-copy-6753651837109684-law.gif" alt="" />

                <div className="home-inputContainer">
                    <Search Iconsearch={SearchIcon}></Search>
                </div>
            </div>
        </div>
    )
}

export default Home
