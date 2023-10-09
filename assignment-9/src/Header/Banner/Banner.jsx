import { FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full relative">
          {/* slid 1 */}
          <div>
            <img
              src="https://i.ibb.co/tsndRqd/Header-Background.png"
              className="w-full"
            />
          </div>
          <div className="absolute w-full">
            <div className="flex justify-center mt-4 md:mt-12 lg:mt-36">
              <h className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
                Your source for Multiple Solutions
              </h>
            </div>
            <div className="mt-4 md:mt-8 lg:mt-12 ">
              <div className="flex gap-2 items-center justify-center">
                <FaCheck className="bg-red-500 md:w-6 md:h-6 p-1 rounded-full text-white"></FaCheck>
                <p className="text-white md:text-2xl font-medium">
                  Equipment repair and PM Service
                </p>
              </div>

              <div className="flex gap-2 md:py-4 items-center justify-center">
                <FaCheck className="bg-red-500 md:w-6 md:h-6 p-1 rounded-full text-white"></FaCheck>
                <p className="text-white md:text-2xl font-medium">
                  Guaranteed Cost Savings vs. OEM
                </p>
              </div>
              <div className=" flex gap-2 items-center justify-center">
                <FaCheck className="bg-red-500 md:w-6 md:h-6 p-1 rounded-full text-white"></FaCheck>
                <p className="text-white md:text-2xl font-medium">
                  Support for End of life Equipment
                </p>
              </div>
              <div className="md:py-4 flex gap-2 items-center justify-center">
                <FaCheck className="bg-red-500 md:w-6 md:h-6 p-1 rounded-full text-white"></FaCheck>
                <p className="text-white md:text-2xl font-medium">
                  Replacement Equipment Available
                </p>
              </div>
            </div>
          </div>
        </div>
          {/* slid 2 */}
        
      </div>
      {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div> */}
    </div>
  );
};

export default Banner;
