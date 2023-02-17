import { Container } from 'components/Global.styled';
import { Navigation } from 'components/Navigation';
import { HeaderStyled, Wrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Wrap>
          <Navigation />
        </Wrap>
      </Container>
    </HeaderStyled>
  );
};
