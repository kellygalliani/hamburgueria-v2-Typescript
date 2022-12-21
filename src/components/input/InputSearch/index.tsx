import { StyledInputSearchBox } from './style'
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export const InputSearch = () => {
  const { userLogout, products,setProducts, filteredProducts, setFilteredProducts } = useContext(UserContext)
  
  function filter(event:React.ChangeEvent<HTMLInputElement>){
    console.log(event.currentTarget.value)
    const filteredList = products.filter((product) => (product.name.toLowerCase().includes(event.currentTarget.value)))
    setProducts(filteredList)
  } 
  return (
    <StyledInputSearchBox>
        <input type="text" placeholder="Digitar Pesquisa" onChange={(event:React.ChangeEvent<HTMLInputElement>)=> filter(event)} />
        <button><FaSearch/></button>
    </StyledInputSearchBox>
  )
}