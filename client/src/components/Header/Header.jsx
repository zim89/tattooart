import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import Navbar from './Navbar/Navbar';
import css from './styles.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrap}>
          <Logo />
          <Navbar />
          <button type="button" className={css.btn}>
            Замовити консультацію
          </button>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
