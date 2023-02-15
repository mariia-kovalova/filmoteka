import PropTypes from 'prop-types';
import { Container } from 'components/Global.styled';
import { Navigation } from 'components/Navigation';
import { HeaderStyled, Wrap } from './Header.styled';

export const Header = ({ children }) => {
  return (
    <HeaderStyled id="header">
      <Container>
        <Wrap className="header__wrapper">
          <Navigation />
        </Wrap>
        {children}
      </Container>
    </HeaderStyled>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
