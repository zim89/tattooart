import css from './styles.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <svg className={css.icon}>
        <use href="./sprite.svg#icon-logo" />
      </svg>
    </Link>
  );
};
export default Logo;
