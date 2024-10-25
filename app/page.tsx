import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Container from './components/container';

const Home: React.FC = () => {
  return (
    <main className="font-pingFang text-base font-normal">
      <Header />
      <Banner />
      <Container />
    </main>
  );
};

export default Home;
