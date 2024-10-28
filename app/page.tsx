import React from "react";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";


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
