// pages/index.tsx
import React from 'react';
import Header from './components/header';
import Banner from './components/banner';

const Home: React.FC = () => {
  return (
    <main className="font-pingFang text-base font-normal">
      <Header />
      <Banner />
    </main>
  );
};

export default Home;
