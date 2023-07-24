import PropTypes from 'prop-types';
import scss from './Contacts.module.scss';
import Socials from './Socials/Socials';
import ContactForm from './ContactForm/ContactForm';

const Contacts = props => {
  return (
    <section className="section">
      <div className="container">
        <div className={scss.wrap}>
          <div className={scss.title}>
            <h2 className="title">Зв`язатися з нами</h2>
          </div>

          <div className={scss.meta}>
            <ContactForm />
          </div>

          <Socials />
        </div>
      </div>
    </section>
  );
};

Contacts.propTypes = {};

export default Contacts;
