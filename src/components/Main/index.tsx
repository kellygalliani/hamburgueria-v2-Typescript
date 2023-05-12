import { useContext } from 'react';
import { Container } from '../../components/styles/Container';
import { UserContext } from '../../contexts/UserContext';
import { useSearchValue } from '../../contexts/SearchValueContext';
import { Cards } from './Cards';
import { StyledMain } from './style';

export const Main = () => {
  const { products } = useContext(UserContext);
  const { searchValue } = useSearchValue();

  return (
    <>
      <StyledMain>
        <Container>
          <ul>
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((card) => {
                return <Cards item={card} key={card.id} />;
              })}
          </ul>
        </Container>
      </StyledMain>
    </>
  );
};
