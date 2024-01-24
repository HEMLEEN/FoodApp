import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import Login from '../screens/Login'
import Patient from '../screens/Patient'
import TakeOrder from '../screens/TakeOrder'
import HistoryScreen from '../screens/History'

const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/home' element={<HomeScreen />}></Route>
                    <Route path='/patient' element={<Patient />}></Route>
                    <Route path='/order' element={<TakeOrder />}></Route>
                    <Route path='/history' element={<HistoryScreen />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter