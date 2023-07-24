import PropTypes from 'prop-types';
import scss from './Socials.module.scss';
import clsx from 'clsx';

const Socials = props => {
  return (
    <ul className={scss.list}>
      <li className={scss.item}>
        <a href="https://www.instagram.com/" className={scss.link}>
          <svg className={scss.icon}>
            <use href="/images/icon-sprite.svg#icon-instagram" />
          </svg>
        </a>
        <span>Instagram</span>
      </li>
      <li className={scss.item}>
        <a href="https://www.facebook.com/" className={scss.link}>
          <svg className={clsx(scss.icon, scss.iconFb)}>
            <use href="/images/icon-sprite.svg#icon-facebook" />
          </svg>
        </a>
        <span>Facebook</span>
      </li>
      <li className={scss.item}>
        <a href="tel:+577807595" className={scss.link}>
          <svg className={scss.icon}>
            <use href="/images/icon-sprite.svg#icon-phone" />
          </svg>
        </a>
        <span>577807595</span>
      </li>
    </ul>
  );
};
Socials.propTypes = {};
export default Socials;
