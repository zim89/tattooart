import PropTypes from 'prop-types';
import scss from './ReviewList.module.scss';
import ReviewItem from '../ReviewItem/ReviewItem';

const data = [
  {
    id: '1',
    avaUrl: '/images/icon-sprite.svg#icon-ava_male',
    username: 'Андрій',
    date: '22 липня 2022',
    text: 'Дякую і ще раз дякую вам за гарну зроблену роботу я дуже радий що звернувся саме до вас.',
  },
  {
    id: '2',
    avaUrl: '/images/icon-sprite.svg#icon-ava_female',
    username: 'Катерина',
    date: '6 липня 2022',
    text: 'Дякую вам за час і за красу. Тішусь і любуюсь.',
  },
  {
    id: '3',
    avaUrl: '/images/icon-sprite.svg#icon-ava_female',
    username: 'Наталія',
    date: '28 листопада 2022',
    text: 'Тату зажило не можу на любуватися і натішитись, що наважилась, я рада що записалась саме до тебе, ти втілила мою мрію в реальність, велике дякую.',
  },
];

const ReviewList = props => {
  return (
    <ul className={scss.list}>
      {data.map(({ id, avaUrl, username, date, text }) => (
        <li key={id} className={scss.item}>
          <ReviewItem
            avaUrl={avaUrl}
            username={username}
            date={date}
            text={text}
          />
        </li>
      ))}
    </ul>
  );
};
ReviewList.propTypes = {};
export default ReviewList;
