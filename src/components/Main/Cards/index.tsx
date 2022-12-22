import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext';
import { iProducts } from '../../../contexts/UserContext';
import { StyledButton } from '../../styles/Buttons';
import { StyledCards } from './style'

interface iItem{
  item: iProducts;
}

export const Cards = ({item}: iItem) => {
  const { addToCart } = useContext(CartContext)
  
  return (
    <>
      <StyledCards key={item.id}>
        <div >
          <img src={item.img} alt={item.name} />
        </div>
        <div>
          <h2>{item.name}</h2>
          <span>{item.category}</span>
          <p>R$ {Number(item.price).toFixed(2)}</p>
          <StyledButton buttonType="buy" onClick={() => addToCart(item)} type="button">Adicionar</StyledButton>
        </div> 
      </StyledCards>
    </>
  )
}