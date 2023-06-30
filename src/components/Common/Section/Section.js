import PropTypes from 'prop-types';
import styles from './Styles.module.scss';
import clsx from 'clsx';

export const Section = ({ pt, children }) => {
  return (
    <div className={clsx(styles.section, pt && styles.sectionPtNull)}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  pt: PropTypes.bool,
};
