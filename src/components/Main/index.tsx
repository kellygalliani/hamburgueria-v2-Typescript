import React, { useContext, useEffect, useState } from 'react'
import { Container } from '../../components/styles/Container'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'
import { Cards } from './Cards'
import { StyledMain } from './style'

export const Main = () => {
 const { products } = useContext(UserContext)
  return (
    <>
    <StyledMain>
      <Container>
        <ul>
            {products.map((card)=>{
                return <Cards item={card} key={card.id}/>
            })}
        </ul>
      </Container>
    </StyledMain>

    </>
  )
}