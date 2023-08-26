import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Netfix from './pages/Netfix'
import Player from './pages/Player'
import Movies from './pages/Movies'
import Tvshows from './pages/Tvshows'
import UserLike from './pages/UserLike'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Singup/>}/>
        <Route exact path="/player" element={<Player/>}/>
        <Route exact path="/movies" element={<Movies/>}/>
        <Route exact path="/tv" element={<Tvshows/>}/>
        <Route exact path="/mylist" element={<UserLike/>}/>
        <Route exact path="/" element={<Netfix/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App