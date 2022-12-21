import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { StyledButton } from '../styles/Buttons'
import { StyledCardCart } from './CartCards/style'
import { StyledCart } from './style'


export const Cart = () => {
 const { currentSale, setcurrentSale, removeToCart, cartTotal } = useContext(CartContext)

  return (
    <StyledCart>
        {currentSale.length === 0? (
            <div>
                <h3>Sua sacola está vazia</h3>
                <span>Adicione itens</span>
            </div> 
        ) : 
          ( <div>
                {/* <ul className='aside__ul'>
                    {currentSale.map((item)=>
                        <StyledCardCart key={item.id}>
                        <div className='li__divImg'>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className='li__divContent'>
                            <div className='divContent__1'>
                            <h3>{item.name}</h3>
                            <p>{item.category}</p>
                            </div>
                            <span onClick={()=> removeToCart(item.id)}>Remover
                            </span>
                        </div>
                        </StyledCardCart>
                    )}
                </ul>
                <div className='aside__divTotal'>
                        <div className='divTotal_divContent'>
                        <h4>Total</h4>
                        <p>R$ {cartTotal.toFixed(2)}</p>
                        </div>
                        <StyledButton type='button'
                        onClick={() => setcurrentSale([])}
                        buttonType='cart_remove'>Remover Todos</StyledButton>
                </div>
                <StyledButton type="submit" color="grey" buttonType="big">Remover Todos</StyledButton> */}
            </div>
        )}
    </StyledCart>
  )
}