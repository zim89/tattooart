import { Container } from '../Common';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import Navbar from './Navbar/Navbar';
import styles from './Styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrap}>
          <Logo />
          <Navbar />
          <button type="button" className={styles.headerBtn}>
            Замовити консультацію
          </button>
          <Burger />
        </div>
      </Container>
    </header>
  );
};

export default Header;
