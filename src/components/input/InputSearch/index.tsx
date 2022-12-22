import { StyledInputSearchBox } from './style'
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export const InputSearch = () => {
  const { products,setProducts } = useContext(UserContext)
  
  function filter(event:React.ChangeEvent<HTMLInputElement>){
    const filteredList = products.filter((product) => (product.name.toLowerCase().includes(event.currentTarget.value)))
    setProducts(filteredList)
    if(event.currentTarget.value){
      setProducts(products)
    }
  } 
  return (
    <StyledInputSearchBox>
        <input type="text" placeholder="Digitar Pesquisa" onChange={(event:React.ChangeEvent<HTMLInputElement>)=> filter(event)} />
        <button><FaSearch/></button>
    </StyledInputSearchBox>
  )
}