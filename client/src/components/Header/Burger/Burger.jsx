import css from './styles.module.css';

const Burger = () => {
  return (
    <button type="button" className={css.burger}>
      <svg className={css.icon}>
        <use href="./sprite.svg#icon-burger" />
      </svg>
    </button>
  );
};
export default Burger;
