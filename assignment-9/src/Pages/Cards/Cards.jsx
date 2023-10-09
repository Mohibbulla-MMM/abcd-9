import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const {
    image,
    card_title,
    price,
    view_details,
    id,
    btn_bg_color,
    title_color,
  } = card;

  return (
    <div className="py-10">
      <div className="card card-compact bg-base-100 shadow-xl rounded-lg">
        <figure className="w-full rounded-lg">
          <img className="rounded-t-lg" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card_title}</h2>
          <div className="flex items-center text-xl">
            <h2
              style={{ background: `${btn_bg_color}`, color: `${title_color}` }}
              className=" text-white px-2"
            >
              Price:
            </h2>
            <BiDollar></BiDollar>
            <span>{price}</span>
          </div>

          <div className="card-actions block py-4">
            <Link className="block" to={`/cards/${id}`}>
              <button
                style={{
                  background: `${btn_bg_color}`,
                  color: `${title_color}`,
                }}
                className="btn w-full text-xl font-semibold "
              >
                {view_details}
              </button>
            </Link>
            <Link className="block mt-4" to={`/order-now`}>
              <button
                style={{
                  background: `${btn_bg_color}`,
                  color: `${title_color}`,
                }}
                className="btn w-full text-xl font-semibold "
              >
             Order now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
