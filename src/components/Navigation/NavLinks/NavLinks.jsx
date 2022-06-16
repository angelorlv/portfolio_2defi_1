import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <AiOutlineHome />
          Accueil
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <AiOutlineUser />
          À Propos de nous
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} activeClassName={s.active}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
