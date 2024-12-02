// import Catagories from '../components/homePage/Catagories'
// import Home from '../components/homePage/Home'
// import Products from '../components/homePage/Products'
// import SellingProducts from '../components/homePage/SellingProducts'
// import Section from '../components/homePage/Section'
// import ExploreProducts from '../components/homePage/ExploreProducts'
// import Arrivals from '../components/homePage/Arrivals'
// import Services from '../components/homePage/Services'

// function Profile()
// {
//     return
//     (
//     <div className='w-[100%] flex flex-col items-center justify-center'>
//      <Home/>
//      <Products/>
//      <Catagories/>
//      <SellingProducts/>
//      <Section/>
//      <ExploreProducts/>
//      <Arrivals/>
//     <Services/>
//     </div>
//     )
// }
// export default Profile

import React from "react";
import Home from "../components/homePage/Home";
import Products from "../components/homePage/Products";
import Catagories from "../components/homePage/Catagories";
import SellingProducts from "../components/homePage/SellingProducts";
import Section from "../components/homePage/Section";
import ExploreProducts from "../components/homePage/ExploreProducts";
import Arrivals from "../components/homePage/Arrivals";
import Services from "../components/homePage/Services";
const Profile = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <Home />
      <Products />
      {/* <Catagories /> */}
      <SellingProducts />
      <Section />
      <ExploreProducts />
      <Arrivals />
      <Services />
    
    </div>
  );
};

export default Profile;
