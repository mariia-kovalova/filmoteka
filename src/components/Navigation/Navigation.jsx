import { Logo } from 'components/Logo/Logo';
import { NavigationItem } from 'components/NavigationItem';
import PropTypes from 'prop-types';
import { NavBar, NavBarList } from './Navigation.styled';

export const Navigation = () => {
  const navLinks = [
    { text: 'Home', route: './' },
    { text: ' My library', route: './' },
  ];
  return (
    <NavBar>
      <Logo />
      <NavBarList>
        {navLinks.map(({ text, route }) => (
          <NavigationItem key={text} text={text} route={route} />
        ))}
      </NavBarList>
    </NavBar>
  );
};

//links routes
