import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import css from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTattoos } from '../../redux/slices/tattoos';
import GalleryItem from './GalleryItem/GalleryItem';

const options = [
  { value: 'all', label: 'Усі' },
  { value: 'hand', label: 'На руці' },
  { value: 'leg', label: 'На нозі' },
  { value: 'back', label: 'На спині' },
  { value: 'body', label: 'На тулубі' },
  { value: 'shoulder', label: 'На плечах' },
  { value: 'neck', label: 'На шиї' },
];
const animatedComponents = makeAnimated();

const Gallery = () => {
  const [currentSelect, setCurrentSelect] = useState('all');
  const { tattoos } = useSelector(state => state.tattoos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTattoos());
  }, [dispatch]);

  const getSelectValue = () => {
    return currentSelect
      ? options.find(item => item.value === currentSelect)
      : '';
  };
  const handlerSelectChange = newValue => {
    setCurrentSelect(newValue.value);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={css.wrap}>
          <div className={css.meta}>
            <h2 className="title">Галерея робіт</h2>
            <div className={css.select}>
              <Select
                components={animatedComponents}
                classNamePrefix="custom-select"
                onChange={handlerSelectChange}
                value={getSelectValue()}
                options={options}
                isSearchable={false}
              />
            </div>
          </div>
          <ul className={css.list}>
            {tattoos.items.map(({ imgUrl, desc, _id }) => (
              <GalleryItem key={_id} imgUrl={imgUrl} desc={desc} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
