import PropTypes from 'prop-types';
import { Container, Section } from '../Common';
import styles from './Styles.module.scss';
import { lora } from '@/app/layout';
import clsx from 'clsx';

const Features = (props) => {
  return (
    <Section pt>
      {/* <div className={styles.features}> */}
      <div className={styles.featuresWrap}>
        <ul className={styles.featuresList}>
          <li className={styles.featuresItem}>Професійність</li>
          <li className={styles.featuresItem}>Унікальний дизайн</li>
          <li className={styles.featuresItem}>Безпека та гігієна</li>
        </ul>
        <Container>
          <p className={clsx(lora.className, styles.featuresText)}>
            Завдяки нашому досвіду, таланту та професіоналізму, ми створимо
            татуювання, яке буде відображати вашу особистість, допоможе виразити
            емоції або просто прикрасить ваше тіло.
          </p>
        </Container>
      </div>
      {/* </div> */}
    </Section>
  );
};

Features.propTypes = {};

export default Features;
