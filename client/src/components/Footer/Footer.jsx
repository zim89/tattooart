import { Link } from 'react-router-dom';
import css from './styles.module.css';
import clsx from 'clsx';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.wrap}>
          <div className={css.meta}>
            <Link to="/">
              <svg className={css.logo}>
                <use href="/sprite.svg#icon-logo" />
              </svg>
            </Link>
            <p className={css.text}>Приношу біль для вашого задоволення</p>
          </div>

          <ul className={css.socials}>
            <a href="https://www.instagram.com/">
              <li className={css.item}>
                <svg className={css.icon}>
                  <use href="/icons-sprite.svg#icon-instagram" />
                </svg>
              </li>
            </a>
            <a href="https://www.facebook.com/">
              <li className={css.item}>
                <svg className={clsx(css.icon, css.fb)}>
                  <use href="/icons-sprite.svg#icon-facebook" />
                </svg>
              </li>
            </a>
            <a href="tel:+577807595">
              <li className={css.item}>
                <svg className={css.icon}>
                  <use href="/icons-sprite.svg#icon-phone" />
                </svg>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
