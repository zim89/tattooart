import PropTypes from 'prop-types';
import scss from './Reviews.module.scss';
import ReviewList from './ReviewList/ReviewList';
import clsx from 'clsx';

const Reviews = props => {
  return (
    <section className="section">
      <div className="container">
        <div className={scss.wrap}>
          <h2 className={clsx('title', scss.title)}>Відгуки</h2>
          <ReviewList />
          <div className={scss.btn}>
            <button className="btn btn-primary" type="button">
              Додати відгук
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
Reviews.propTypes = {};
export default Reviews;
