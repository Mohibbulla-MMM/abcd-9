import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const OurProductDetails = () => {
  const [data, setData] = useState({});
  const getProdct = useLoaderData();
  // console.log(getProdct);
  const { id } = useParams();
  //   item filter
  const itemFilter = getProdct?.find((item) => item.id == id);
  // console.log(itemFilter);
  // data set ------
  useEffect(() => {
    setData(itemFilter);
  }, [id]);
  console.log(id);
  return (
    <div className="max-w-xl mx-auto">
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
              {/* <BiDollar></BiDollar> */}
              <span>{data?.price}</span>
            </div>
            <div>
                <p>{data?.description}</p>
            </div>

            <div className="card-actions py-4">
               <Link to={"/"} className="btn bg-blue-700 text-white">Go Home </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductDetails;
