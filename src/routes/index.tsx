import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import { CartProvider } from '../contexts/CartContext'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { RegisterPage } from '../pages/RegisterPage'

export const RoutesMain = () => {
  return (
    <Routes>
        <Route path='/' element={ <LoginPage/> }/>
        <Route path='/register' element={ <RegisterPage/> }/>
        <Route path='/main' element={<ProtectedRoutes/>}>
          <Route index element={
           <CartProvider>
             <MainPage/> 
           </CartProvider>
          }/>
        </Route>
          
    </Routes>
  )
}
