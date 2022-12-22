import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iProducts } from "./UserContext";

interface iCartContextProps{
    children: React.ReactNode,
}
interface iCartProviderValue{
  modalIsOpen: boolean;
  setModaIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentSale: iCartProducts[];
  setcurrentSale: React.Dispatch<React.SetStateAction<iCartProducts[] | []>>;
  addToCart: (item: iProducts) => void;
  removeToCart: (itemId: number)=> void;
  cartTotal: number;
  setCartTotal:React.Dispatch<React.SetStateAction<number>>
}
export interface iCartProducts extends iProducts{}

export const CartContext = createContext({} as iCartProviderValue )

export const CartProvider = ({children}: iCartContextProps) =>{
  const [modalIsOpen, setModaIsOpen] = useState(false)
  const [currentSale, setcurrentSale] = useState<iCartProducts[]>([])
  const [cartTotal, setCartTotal] = useState(0)
  

  function addToCart(item: iProducts){
  
    if(!currentSale.includes(item)){
      setcurrentSale(()=>[...currentSale, {...item, quantity: 1}])
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
  
      
    return(
        <CartContext.Provider value={{modalIsOpen,setModaIsOpen, currentSale, setcurrentSale, addToCart, removeToCart, cartTotal, setCartTotal}}>
          {children}
        </CartContext.Provider>
      )

}

