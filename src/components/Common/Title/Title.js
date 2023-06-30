import styles from './Styles.module.scss';

export const Title = ({ tag, text }) => {
  const Tag = tag || 'h2';
  return <Tag className={styles.title}>{text}</Tag>;
};
