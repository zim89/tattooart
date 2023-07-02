'use client';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Container, Section, Title } from '../Common';
import styles from './Styles.module.scss';
import Image from 'next/image';
import images from '@/data/gallery.json';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';

const options = [
  { value: 'all', title: 'Усі' },
  { value: 'hand', title: 'На руці' },
  { value: 'leg', title: 'На нозі' },
  { value: 'back', title: 'На спині' },
  { value: 'body', title: 'На тулубі' },
  { value: 'shoulder', title: 'На плечах' },
  { value: 'neck', title: 'На шиї' },
];

const Option = (props) => {
  const {
    option: { value, title },
    onClick,
    currentValue,
  } = props;
  const optionRef = useRef(null);

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;

    const handleEnterPress = (event) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterPress);

    return () => {
      option.removeEventListener('keydown', handleEnterPress);
    };
  }, [value, onClick]);

  const handleClick = (clickedValue) => () => {
    onClick(clickedValue);
  };

  return (
    <li
      className={clsx(
        styles.option,
        currentValue === value ? styles.optionCurrent : ''
      )}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
    >
      {title}
    </li>
  );
};

const Select = (props) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    status = 'default',
    selected,
    onChange,
    onClose,
    currentValue,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleClick = (event) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev);
      }
    };

    placeholderEl.addEventListener('keydown', handleClick);

    return () => {
      placeholderEl.removeEventListener('keydown', handleClick);
    };
  }, []);

  const handleOptionClick = (value) => {
    setIsOpen(false);
    onChange?.(value);
  };

  const handlePlaceHolderClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={styles.selectWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
    >
      <div className={styles.arrow}>
        <IconChevronDown />
      </div>
      <div
        className={styles.placeholder}
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className={styles.select}>
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
              currentValue={currentValue}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const Gallery = (props) => {
  const [part, setPartValue] = useState('all');
  const handlePartSelect = (value) => {
    setPartValue(value);
  };

  const selectedPart = options.find((item) => item.value === part);

  return (
    <Section>
      <Container>
        <div className={styles.galleryWrap}>
          <div className={styles.galleryMeta}>
            <Title text="Галерея робіт" />
            <div className="Select">
              <Select
                options={options}
                selected={selectedPart || null}
                onChange={handlePartSelect}
                // placeholder="Выберите месяц"
                currentValue={part}
              />
            </div>
          </div>
          <ul className={styles.galleryList}>
            {images.data.map(({ id, path, desc }) => (
              <li key={id} className={styles.galleryItem}>
                <Image
                  src={path}
                  alt={desc}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

Gallery.propTypes = {};

export default Gallery;
