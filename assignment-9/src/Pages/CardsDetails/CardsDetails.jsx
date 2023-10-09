import { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CardsDetails = () => {
  const [data, setData] = useState({});
  const getData = useLoaderData();
  //   console.log(getData);
  const { id } = useParams();
  //   item filter
  const itemFilter = getData?.find((item) => item.id == id);
  // console.log(itemFilter);
  // data set ------
  useEffect(() => {
    setData(itemFilter);
  }, [id]);

//   const { image, card_title, price, view_details, btn_bg_color, title_color } =
//     data || {};
  //   console.log();

    console.log(data);
  return (
    <div>
      <div className="py-10">
        <div className="card card-compact bg-base-100 shadow-xl rounded-lg">
          <figure className="w-full rounded-lg">
            <img className=" w-full h-[400px] object-cover" src={data?.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data?.card_title}</h2>
            <div className="flex items-center text-xl">
              <h2
                style={{
                  background: `${data?.btn_bg_color}`,
                  color: `${data?.title_color}`,
                }}
                className=" text-white px-2"
              >
                Price:
              </h2>
              <BiDollar></BiDollar>
              <span>{data?.price}</span>
            </div>
            <div>
                <p>{data?.description}</p>
            </div>

            <div className="card-actions py-4">
               <button className="btn bg-blue-700 text-white">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
