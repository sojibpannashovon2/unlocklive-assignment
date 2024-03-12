import React from "react";
import Banner from "../../componet/Home/Banner";
import Schdule from "../../componet/Schdule/Schdule";
import Choose from "../../componet/Choose/Choose";
import CoffeeMenue from "../../componet/Coffee Menue/CoffeeMenue";

const Home = () => {
  return (
    <div>
      <Banner />
      <Schdule />
      <Choose />
      <CoffeeMenue />
    </div>
  );
};

export default Home;
