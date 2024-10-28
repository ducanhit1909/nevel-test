// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Container from './components/Container';

const Home: React.FC = () => {
  return (
    <div className="font-pingFang text-base font-normal">
      <Header />
      <Banner />
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
