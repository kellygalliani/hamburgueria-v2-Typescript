import React from "react"
import { useContext } from "react"
import { Outlet, useNavigate,  } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const {userLogged, loadingForApi, products} = useContext(UserContext)
    
    if(loadingForApi){ 
      return null 
    }
    
  return (
    <>
        {products ? <Outlet /> : navigate("/")}
    </>
  )
}