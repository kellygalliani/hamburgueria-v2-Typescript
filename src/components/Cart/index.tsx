import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { StyledButton } from '../styles/Buttons'
import { StyledCardCart } from './CartCards/style'
import { StyledCart } from './style'
import { iCartProducts } from '../../interfaces/CartContextInterfaces'

export const Cart = () => {
 const { currentSale, setcurrentSale, removeToCart, cartTotal, setCartTotal } = useContext(CartContext)

 const counterItem = (valor:string, item:iCartProducts)=>{
    if(valor === "+"){
        setCartTotal(cartTotal+item.price)
        const newArray = currentSale.map((element)=>{
            if(element.id === item.id){
                return {...element, quantity: element.quantity + 1 }
            }else{
                return element
            }
        })
        setcurrentSale(newArray)
    }
    if(valor === "-"){
        setCartTotal(cartTotal-item.price)
        
        let newArray = [...currentSale];
        if (newArray.find(element => element.id === item.id && element.quantity <= 1)) {
            newArray = newArray.filter(element => element.id !== item.id);
        } else {
            newArray = newArray.map((element)=>{
                if(element.id === item.id){
                    return { ...element, quantity: element.quantity - 1 }
                } else {
                    return element
                }
            });
        }
        setcurrentSale(newArray)
    }
 }

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
                                    <button onClick={()=>counterItem("-", item)}> - </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=>counterItem("+", item)}> + </button>
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