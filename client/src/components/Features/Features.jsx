import clsx from 'clsx';
import css from './styles.module.css';

const Features = () => {
  return (
    <section className={css.features}>
      <div className={css.wrap}>
        <ul className={css.list}>
          <li className={css.item}>Професійність</li>
          <li className={css.item}>Унікальний дизайн</li>
          <li className={css.item}>Безпека та гігієна</li>
        </ul>
        <div className="container">
          <p className={css.text}>
            Завдяки нашому досвіду, таланту та професіоналізму, ми створимо
            татуювання, яке буде відображати вашу особистість, допоможе виразити
            емоції або просто прикрасить ваше тіло.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Features;
