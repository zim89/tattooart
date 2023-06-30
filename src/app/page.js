import Care from '@/components/Care/Care';
import { Container, Section } from '@/components/Common';
import Contacts from '@/components/Contacts/Contacts';
import Features from '@/components/Features/Features';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Hero/Hero';
import Prices from '@/components/Prices/Prices';
import Reviews from '@/components/Reviews/Reviews';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Care />
      <Prices />
      <Reviews />
      <Contacts />
    </>
  );
};

export default Home;
