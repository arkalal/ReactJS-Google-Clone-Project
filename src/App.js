import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/Search/SearchPage'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>} ></Route>
                    <Route path='/search' element={<SearchPage></SearchPage>} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
