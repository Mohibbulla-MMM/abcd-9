import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("====================", data);

  return (
    <div>
      <h1 className="text-4xl text-center px-3 my-8 font-bold border-b-2 py-6 border-gray-400">
        Our Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-7">
        {data &&
          data?.map((item, i) => (
            <div
              key={i}
              className="rounded-lg bg-gray-200 p-4 space-y-4 text-center"
            >
              <figure>
                <img
                  className="w-full h-[300px] object-cover rounded-md"
                  src={item?.image}
                  alt=""
                />
              </figure>
              <h1 className="text-2xl text-black"> {item?.card_title}</h1>
              <p>
                <Link
                  to={`/products/${item?.id}`}
                  className="btn bg-blue-700 text-white"
                >
                  Order Now
                </Link>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurProduct;
