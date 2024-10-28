import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Container from "./components/container";

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
