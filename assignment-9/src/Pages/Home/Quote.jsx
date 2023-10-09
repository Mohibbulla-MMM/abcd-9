// import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <div className="w-full py-10">
      <div className="md:flex justify-center items-center md:flex-row-reverse">
        <div>
          <figure>
            <img src="https://i.ibb.co/Y2ZK1cQ/Screenshot-1.png" alt="" />
          </figure>
        </div>
        <form>
          <div className="w-96">
            <label>
              <span className="">First name</span>
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="First name"
              className="input input-bordered w-full"
              required/>
          </div>
          <div className="w-96">
            <label>
              <span className="">Last name</span>
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Last name"
              className="input input-bordered w-full"
              required/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
