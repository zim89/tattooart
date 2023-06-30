import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Styles.module.scss';

export const Button = ({ style, children }) => {
  return (
    <button
      className={clsx(
        styles.btn,
        !style ? styles.btnPrimary : styles.btnSecondary
      )}
      type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node,
};
