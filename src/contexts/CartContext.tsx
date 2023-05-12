import { createContext, useEffect, useState } from "react";
import { iCartContextProps, iCartProducts, iCartProviderValue } from "../interfaces/CartContextInterfaces";
import { iProducts } from "../interfaces/UserContextInterfaces";


export const CartContext = createContext({} as iCartProviderValue )

export const CartProvider = ({children}: iCartContextProps) =>{
  const [modalIsOpen, setModaIsOpen] = useState(false)
  const [currentSale, setcurrentSale] = useState<iCartProducts[]>(() => {
    const storedCurrentSale = localStorage.getItem('currentSale');
    return storedCurrentSale ? JSON.parse(storedCurrentSale) : [];
   });
   
   const [cartTotal, setCartTotal] = useState(() => {
    const storedCartTotal = localStorage.getItem('cartTotal');
    return storedCartTotal ? JSON.parse(storedCartTotal) : 0;
   });

  function addToCart(item: iProducts) {
    const itemIndex = currentSale.findIndex((product) => product.id === item.id)
    if (itemIndex !== -1) {
      const newCurrentSale = [...currentSale]
      newCurrentSale[itemIndex].quantity += 1
      setcurrentSale(newCurrentSale)
    } else {
      setcurrentSale([...currentSale, { ...item, quantity: 1 }])
    }
  }

  function removeToCart(itemId: number){
    const newList = currentSale.filter((itemSale) => itemSale.id !== itemId)
    setcurrentSale(newList)
  }

  function cart_Total(){
    if(currentSale.length > 0){
       const total =  currentSale.reduce((acc, presentValue) =>{
        return (presentValue.price * presentValue.quantity) + acc
       }, 0)
       setCartTotal(total)
    }
  }
  useEffect(()=>{
    cart_Total()
  }, [currentSale])

  useEffect(() => {
    localStorage.setItem('currentSale', JSON.stringify(currentSale));
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
   }, [currentSale, cartTotal]);
   
    useEffect(() => {
    const storedCurrentSale = localStorage.getItem('currentSale');
    const storedCartTotal = localStorage.getItem('cartTotal');
    if (storedCurrentSale) {
    setcurrentSale(JSON.parse(storedCurrentSale));
    }
    if (storedCartTotal) {
    setCartTotal(JSON.parse(storedCartTotal));
    }
   }, []);
  
      
    return(
        <CartContext.Provider value={{modalIsOpen,setModaIsOpen, currentSale, setcurrentSale, addToCart, removeToCart, cartTotal, setCartTotal}}>
          {children}
        </CartContext.Provider>
      )

}

