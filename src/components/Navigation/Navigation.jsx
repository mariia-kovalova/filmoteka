import { Logo } from 'components/Logo/Logo';
// import PropTypes from 'prop-types';
import { NavBar, NavBarLink, NavBarList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavBar>
      <Logo />
      <NavBarList>
        <li>
          <NavBarLink to="/" end>
            Home
          </NavBarLink>
        </li>
        <li>
          <NavBarLink to="/library">My library</NavBarLink>
        </li>
      </NavBarList>
    </NavBar>
  );
};
