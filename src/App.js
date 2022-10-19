import { Route, Routes } from "react-router-dom";
import AllDoor from "./Categories/Door/AllDoor";
import SubCategory from "./Categories/Door/SubCategory";
import CategoryList from "./Components/CategoryList";
import FsingleProduct from "./Components/FsingleProduct";
import Signin from "./Pages/auth/SingIn";
import Home from "./Pages/Home/Home";
import Office from "./Pages/Office";

import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
<link href="/dist/output.css" rel="stylesheet"></link>;

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorylist/:category" element={<CategoryList />} />
        <Route path="/office" element={<Office />}></Route>
        <Route path="/fsingleproduct/:id" element={<FsingleProduct />}></Route>
        <Route path="/doors" element={<AllDoor />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/doors/:id" element={<SubCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
