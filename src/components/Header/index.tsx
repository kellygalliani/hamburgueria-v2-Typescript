import React, { useContext, useEffect, useState } from 'react'
import { InputSearch } from '../../components/input/InputSearch'
import { Container } from '../../components/styles/Container'
import Logo from '../../images/Logo.svg'
import { FaShoppingCart, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { StyledHeader } from './style';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';


export const Header = () => {
  const { userLogout } = useContext(UserContext)
  const { setModaIsOpen, currentSale } = useContext(CartContext)
  const [searchButton, setSeachButton] = useState(true)

  const openSeachButtonMobile = ()=>{
      setSeachButton(!searchButton)
  }
  useEffect(()=>{
      openSeachButtonMobile()
  },[])

  return (
    <>
    <StyledHeader>
      <Container>
        <div>
          <img src={Logo} alt="Logo" />
          <div>
            <InputSearch />
            <FaSearch onClick={openSeachButtonMobile}/>
            <div>
              <FaShoppingCart onClick={()=> setModaIsOpen(true)}/>
              <span>{currentSale.length}</span>
            </div>
            <FaSignOutAlt onClick={userLogout}/>
          </div>
        </div>
      </Container>
      {searchButton && 
        <div onBlur={openSeachButtonMobile} >
            <InputSearch/>
        </div>
      }
    </StyledHeader>

    </>
  )
}