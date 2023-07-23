import styles from '../styles.module.css';

const GalleryItem = ({ desc, imgUrl }) => {
  return (
    <li className={styles.item}>
      <img src={imgUrl} alt={desc} />
    </li>
  );
};
export default GalleryItem;
