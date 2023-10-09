import { Link } from "react-router-dom";
import Social from "../../Header/social/Social";
import toast from "react-hot-toast";

const OrderForm = () => {
  const handleBooking = () => {
    toast.success("Your Bookin Success");
  };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl  font-bold"> 
            Order Now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleBooking}>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div> 

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div> 

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                        Phone Number
                    </span>
                  </label>
                  <input
                    type="number"
                    name="number"
                    placeholder="phone  number"
                    className="input input-bordered"
                    required
                  />
                  
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                       Your location

                    </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="your location"
                    className="input input-bordered"
                    required
                  />
                  
                </div>


                <div className="form-control mt-6">
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </form>
              <p>
                Do not have an account? Please
                <Link to="/register">
                  <button className="btn btn-link">Register</button>
                </Link>
              </p>
              <p>
                {/* <button className="btn btn-ghost">
                  <Social></Social>
                </button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
