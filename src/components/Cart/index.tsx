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
            <div className='divEmpty'>
                <h3>Sua sacola está vazia</h3>
                <span>Adicione itens</span>
            </div> 
        ) : 
          ( <div className='div'>
                <ul>
                    {currentSale.map((item)=>
                        <StyledCardCart key={item.id}>
                            <div>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <span onClick={()=> removeToCart(item.id)}>Remover</span>
                                </div>
                                <div>
                                    <button> - </button>
                                    <span>2</span>
                                    <button> + </button>
                                </div>                               
                            </div>
                        </StyledCardCart>
                    )} 
                </ul>
                <div className='divTotal'>
                    <div>
                        <h4>Total</h4>
                        <p>R$ {cartTotal.toFixed(2)}</p>
                    </div>
                    <StyledButton type='button'
                    onClick={() => setcurrentSale([])}
                    buttonType='cart_remove'>Remover Todos</StyledButton>
                </div>
            </div>
        )}
    </StyledCart>
  )
}