import styles from './Styles.module.scss';

import React from 'react';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navGroup}>
        <a href="#" className={styles.navLink}>
          Про нас
        </a>
        <a href="#" className={styles.navLink}>
          Галерея
        </a>
        <a href="#" className={styles.navLink}>
          Догляд
        </a>
        <a href="#" className={styles.navLink}>
          Ціна
        </a>
        <a href="#" className={styles.navLink}>
          Відгуки
        </a>
      </div>
      <svg className={styles.navLogo}>
        <use href="/images/sprite.svg#icon-logo" />
      </svg>
      <a href="#" className={styles.navLink}>
        Контакти
      </a>
      <button type="button" className={styles.navLink}>
        UA
      </button>
    </nav>
  );
};

export default Navbar;
