import Contacts from '../components/Contacts/Contacts';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <Reviews />
      <Contacts />
      <Footer />
    </>
  );
};
export default MainPage;
