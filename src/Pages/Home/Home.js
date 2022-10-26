import React from "react";
import Banner from "../../Components/Banner/Banner";
import OfficeFurnitures from "../OfficeCategory/OfficeFurnitures";
import Categories from "../../Components/Categories";
import Chair from "../../Components/Chair";

const Home = () => {
  return (
    <div>
      <Banner />
      <OfficeFurnitures></OfficeFurnitures>
      <Chair />
      <Categories />
    </div>
  );
};

export default Home;
