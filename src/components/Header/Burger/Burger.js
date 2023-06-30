import styles from './styles.module.scss';

const Burger = () => {
  return (
    <button type="button" className={styles.burger}>
      <svg className={styles.burgerIcon}>
        <use href="/images/sprite.svg#icon-burger" />
      </svg>
    </button>
  );
};

export default Burger;
