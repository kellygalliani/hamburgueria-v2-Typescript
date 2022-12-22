import { createContext, useEffect, useState } from "react";
import { iLoginFormData } from "../pages/LoginPage";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface iUserContextProps{
    children: React.ReactNode,
}
interface iUserProviderValue{
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
interface iRequestError{
    error: string;
}
interface iUser{
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
}
export const UserContext = createContext({} as iUserProviderValue )

export const UserProvider = ({children}: iUserContextProps) =>{
    const [loadingForApi, setloadingForApi] = useState(true)
    const [userLogged, setUserLogged] = useState<iUser | null>(null)
    const [products, setProducts] = useState([] as iProducts[])
    const [filteredProducts, setFilteredProducts] = useState([] as iProducts[])

    const navigate = useNavigate()

    const apiRegister = async (FormData:iApiRegister) =>{
        setloadingForApi(true)
        try {
            const response = await api.post("/users", FormData)
            toast.success("Cadastro efetuado com sucesso")
            navigate("/")
            
        } catch (error) {
            const currentError = error as AxiosError<iRequestError>
            toast.error(/* currentError.response?.data.error */"Algo deu errado!")
        }finally{
            setloadingForApi(false)
        }
    }
    const apiLogin = async (FormData:iLoginFormData) =>{
        setloadingForApi(true)
        try {
            const response = await api.post("/login", FormData)
            toast.success("Login efetuado com sucesso")
            navigate("/main")
            localStorage.setItem("@TOKEN", response.data.accessToken)
            setUserLogged(response.data.user)
            
        } catch (error) {
            const currentError = error as AxiosError<iRequestError>
            toast.error(/* currentError.response?.data.error */"Algo deu errado!")
        } finally{
            setloadingForApi(false)
        }
    }
    const mainPageGetProducts = async ()=>{
        const token = localStorage.getItem("@TOKEN")
        if (!token) {
            setloadingForApi(false)
            navigate("/")
            return
        }
        if(token){
            navigate("/main")
        }

        try {
            const response = await api.get("/products", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setProducts(response.data)

        } catch (error) {
            const currentError = error as AxiosError
            const errorMessage = (currentError.response?.data as string) || "Algo deu errado"
            toast.error(errorMessage)
            navigate("/")
        }finally{
            setloadingForApi(false)
        }
    }

    useEffect(()=>{
        mainPageGetProducts()
    },[])

    const userLogout = ()=>{
        localStorage.removeItem("@TOKEN")
        setUserLogged(null)
        navigate("/")
    }
    
    return(
        <UserContext.Provider value={{apiRegister, apiLogin, loadingForApi, userLogged, userLogout, products, setProducts, filteredProducts, setFilteredProducts, mainPageGetProducts}}>
          {children}
        </UserContext.Provider>
      )

}

