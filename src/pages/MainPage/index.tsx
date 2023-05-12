import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../../components/Cart';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Modal } from '../../components/Modal';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { SearchValueProvider } from '../../contexts/SearchValueContext';

export const MainPage = () => {
  const { mainPageGetProducts } = useContext (UserContext)
  const { modalIsOpen } = useContext(CartContext)

 useEffect(()=>{
    mainPageGetProducts()
  },[])

  return (
    <>
      <SearchValueProvider>
        <Header />
        <Main/>
        { modalIsOpen && 
          <Modal >
              <Cart/>          
          </Modal> }   
      </SearchValueProvider>
    </>
  )
}