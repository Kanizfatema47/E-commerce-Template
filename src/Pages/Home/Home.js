import React from "react";
import Banner from "../../Components/Banner";

import Categories from "../../Components/Categories";
import OfficeFurnitureCategory from "../../Components/OfficeFurnitureCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <OfficeFurnitureCategory />
      <Categories />
    </div>
  );
};

export default Home;
