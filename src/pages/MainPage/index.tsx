import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../../components/Cart';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Modal } from '../../components/Modal';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';

export const MainPage = () => {
  const { mainPageGetProducts } = useContext (UserContext)
  const { modalIsOpen } = useContext(CartContext)

  useEffect(()=>{
    mainPageGetProducts()
  },[])

  return (
    <>
    <Header />
    <Main/>
    { modalIsOpen && 
      <Modal >
          <Cart/>          
      </Modal> }   
    </>
  )
}