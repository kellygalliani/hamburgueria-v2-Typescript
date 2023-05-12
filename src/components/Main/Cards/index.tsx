import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext';
import { StyledButton } from '../../styles/Buttons';
import { StyledCards } from './style'
import { iProducts } from '../../../interfaces/UserContextInterfaces';
import { toast } from "react-toastify";

interface iItem{
  item: iProducts;
}

export const Cards = ({item}: iItem) => {
  const { addToCart, currentSale } = useContext(CartContext)
  
  const handleAddToCart = () => {
    addToCart(item);
      const itemInCart = currentSale.find(product => product.id === item.id);
      if (itemInCart) {
        toast.success(`Você tem ${itemInCart.quantity} ${item.name} no carrinho`);
      } else {
        toast.success(`${item.name} foi adicionado ao carrinho`);
      }
    }
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
          <StyledButton buttonType="buy" onClick={handleAddToCart} type="button">Adicionar</StyledButton>
        </div> 
      </StyledCards>
    </>
  )
}