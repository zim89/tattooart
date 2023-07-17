import css from './styles.module.css';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <div className={css.wrap}>
          <div className={css.content}>
            <h1 className={css.title}>Katerina tattooart</h1>
            <p className={css.text}>Приношу біль для вашого задоволення</p>
          </div>
          <div className={css.btn}>
            <button className="btn btn-primary">Замовити консультацію</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
