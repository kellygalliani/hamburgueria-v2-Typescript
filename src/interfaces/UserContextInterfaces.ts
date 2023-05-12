import { iLoginFormData } from "../pages/LoginPage";

export interface iUserContextProps{
    children: React.ReactNode,
}
export interface iUserProviderValue{
    apiRegister:(FormData: iApiRegister) => void;
    apiLogin:(FormData: iLoginFormData) => void;
    loadingForApi: boolean;
    userLogged: iUser | null;
    userLogout: () => void;
    products: iProducts[];
    setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
    filteredProducts:iProducts[];
    setFilteredProducts:React.Dispatch<React.SetStateAction<iProducts[]>>;
    mainPageGetProducts: () => Promise<void>;

}
export interface iApiRegister{
    name:string;
    email:string;
    password:string;
}
export interface iRequestError{
    error: string;
}
export interface iUser{
    name: string;
    email: string;
    id: number;
}
export interface iProducts{
    name: string;
    id:number;
    price: number;
    category: string;
    img: string;
    quantity: number;
}