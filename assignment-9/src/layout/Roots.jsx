import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Banner from "../Header/Banner/Banner";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Roots = () => {
  return (
    <div>
      <div className="md:px-14">
        <Navbar></Navbar>
      </div>

      <div>
        <Banner></Banner>
      </div>

      <div className="px-14">
        <Outlet></Outlet>
      </div>
      <div className="px-6 md:px-14 bg-black">
        <Footer></Footer>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Roots;
