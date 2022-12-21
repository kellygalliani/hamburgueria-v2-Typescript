import React, { useContext, useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { ContentModalStyled, ModalBackgroundStyled } from './style';
import { CartContext } from '../../contexts/CartContext';

 interface iModal{
    children: React.ReactNode,
} 

export const Modal = ({children}:iModal) => {
    const { setModaIsOpen } = useContext(CartContext)
    
    return (
     <ModalBackgroundStyled>
        <ContentModalStyled>
          <header>
            <h2>Carrinho de Compras</h2>
            <IoIosClose onClick={() => setModaIsOpen(false)}/>
          </header>
          {children}
        </ContentModalStyled>
     </ModalBackgroundStyled>
    )
  }