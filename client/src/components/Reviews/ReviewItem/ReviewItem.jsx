import PropTypes from 'prop-types';
import scss from './ReviewItem.module.scss';

const ReviewItem = ({ avaUrl, username, date, text }) => {
  return (
    <div className={scss.wrap}>
      <div className={scss.head}>
        <svg className={scss.avatar}>
          <use href={avaUrl} />
        </svg>
        <div className={scss.meta}>
          <span className={scss.name}>{username}</span>
          <span className={scss.date}>{date}</span>
        </div>
      </div>
      <div className={scss.text}>{text}</div>
    </div>
  );
};
ReviewItem.propTypes = {};
export default ReviewItem;
