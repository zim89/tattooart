import Link from 'next/link';
import styles from './Styles.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <svg className={styles.logoIcon}>
        <use href="/images/sprite.svg#icon-logo" />
      </svg>
    </Link>
  );
};

export default Logo;
