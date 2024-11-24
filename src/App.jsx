import React from 'react'
import './App.css'
import LandingPage from './stores/pages/landingPage'
import { Route, Routes } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import CompPage from './stores/pages/CompPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import WatchPage from './stores/pages/WatchPage'
import WomanPage from './stores/pages/WomanPage'
import MobileSingle from './stores/singles/MobileSingle'
import { UserCart } from './UserCart'
import AcSingle from './stores/singles/AcSingle'
import ComputerSingle from './stores/singles/ComputerSingle'
import { BrowserRouter } from 'react-router-dom'
import Login from './AUTH/Login'
import SignUp from './AUTH/SignUp'
import Logout from './AUTH/Logout'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import MenSingle from './stores/singles/MenSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
function App() {
  return (
    <div>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/logout' element={<Logout />} />

        <Route path='/home' element={<LandingPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobilepage' element={<MobilePage />} />
        <Route path='/acpage' element={<AcPage />} />
        <Route path='/computer' element={<CompPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path='/women' element={<WomanPage />} />


        <Route path='/mobilepage/:id' element={<MobileSingle />} />
        <Route path='/acpage/:id' element={<AcSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/cart' element={<UserCart />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/woman/:id' element={<WomanSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/watch/:id' element={<WatchSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />

      </Routes>



    </div>
  )
}

export default App