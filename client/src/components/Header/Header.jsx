import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import Navbar from './Navbar/Navbar';
import css from './styles.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuth = false;

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrap}>
          <Logo />
          <Navbar />
          <button type="button" className={css.btn}>
            Замовити консультацію
          </button>
          {isAuth ? (
            <button type="button" className={css.logoutBtn}>
              Вихід
            </button>
          ) : (
            <Link to="/login" className={css.loginBtn}>
              Вхід
            </Link>
          )}

          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
