import PropTypes from 'prop-types';
import { NavBarLink } from './NavigationItem.styled';

export const NavigationItem = ({ text, route }) => {
  return (
    <li>
      <NavBarLink href={route}>{text}</NavBarLink>
    </li>
  );
};

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

// router link styled
