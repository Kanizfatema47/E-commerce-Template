import React from 'react';
import Banner from '../../Components/Banner';
import Categories from '../../Components/Categories';
import OfficeFurnitures from '../OfficeCategory/OfficeFurniture';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OfficeFurnitures/>
            <Categories />
        </div>
    );
};

export default Home;