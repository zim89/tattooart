import PropTypes from 'prop-types';
import styles from './Styles.module.scss';

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = { children: PropTypes.node };
