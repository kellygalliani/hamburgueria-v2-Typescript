import React from "react";
import { iProducts } from "./UserContextInterfaces";


export interface iCartContextProps{
    children: React.ReactNode,
}
export interface iCartProviderValue{
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