import { createContext, useContext, useState } from 'react';

interface iSearchContextProps{
  children: React.ReactNode,
}

const SearchValueContext = createContext({
  searchValue: '',
  setSearchValue: (value: string) => {},
});

export const SearchValueProvider = ({ children }: iSearchContextProps) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};

export const useSearchValue = () => useContext(SearchValueContext);