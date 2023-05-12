import { StyledInputSearchBox } from './style';
import { FaSearch } from 'react-icons/fa';
import { useSearchValue } from '../../../contexts/SearchValueContext';

export const InputSearch = () => {
  const { setSearchValue } = useSearchValue();

  function filter(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.currentTarget.value);
  }

  return (
    <StyledInputSearchBox>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => filter(event)}
      />
      <button>
        <FaSearch />
      </button>
    </StyledInputSearchBox>
  );
};