import PropTypes from 'prop-types';
import styles from './Styles.module.scss';
import { Button, Container } from '../Common';

const Hero = (props) => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroWrap}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Katerina tattooart</h1>
            <p className={styles.heroText}>
              Приношу біль для вашого задоволення
            </p>
          </div>
          <div className={styles.heroBtn}>
            <Button>Замовити консультацію</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = {};

export default Hero;
