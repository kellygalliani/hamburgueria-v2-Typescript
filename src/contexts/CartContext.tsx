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
}
export interface iCartProducts{
  name: string;
  id:number;
  price: number;
  category: string;
  img: string;
}
export const CartContext = createContext({} as iCartProviderValue )

export const CartProvider = ({children}: iCartContextProps) =>{
  const [modalIsOpen, setModaIsOpen] = useState(false)
  const [currentSale, setcurrentSale] = useState/* <iCartProducts[]> */([] as iCartProducts[])
  const [cartTotal, setCartTotal] = useState(0)
  
  console.log(currentSale)
 
  function addToCart(item: iProducts){
    console.log(item)
    if(!currentSale.includes(item)){
      setcurrentSale([...currentSale, item])
    }
  }

  function removeToCart(itemId: number){
    const newList = currentSale.filter((itemSale) => itemSale.id !== itemId)
    setcurrentSale(newList)
  }

  function cart_Total(){
    if(currentSale.length > 0){
       const total =  currentSale.reduce((acc, presentValue) =>{
        return presentValue.price + acc
       }, 0)
       setCartTotal(total)
    }
  }
  cart_Total()
      
    return(
        <CartContext.Provider value={{modalIsOpen,setModaIsOpen, currentSale, setcurrentSale, addToCart, removeToCart, cartTotal}}>
          {children}
        </CartContext.Provider>
      )

}

