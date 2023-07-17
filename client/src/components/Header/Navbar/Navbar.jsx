import css from './styles.module.css';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.group}>
        <a href="#" className={css.link}>
          Про нас
        </a>
        <a href="#" className={css.link}>
          Галерея
        </a>
        <a href="#" className={css.link}>
          Догляд
        </a>
        <a href="#" className={css.link}>
          Ціна
        </a>
        <a href="#" className={css.link}>
          Відгуки
        </a>
      </div>
      <svg className={css.logo}>
        <use href="./sprite.svg#icon-logo" />
      </svg>
      <a href="#" className={css.link}>
        Контакти
      </a>
      <a href="#" className={css.link}>
        UA
      </a>
    </nav>
  );
};
export default Navbar;
