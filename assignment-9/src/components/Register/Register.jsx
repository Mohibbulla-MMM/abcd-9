import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import LoginPopUp from "../LoginPopUp/LoginPopUp";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    // console.log("Register");
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // const passwordLengthCheker
    if (password.length < 6) {
      toast.error("Password must be 6 characters");
      return;
    }
    const upperCaseChear = /[A-Z]/;
    if (!upperCaseChear.test(password)) {
      toast.error("Password must be used minimum 1 characters UPPER Case");
      return;
    }
    const specialCharacterCheker = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
    if (!specialCharacterCheker.test(password)) {
      toast.error("Password must be used minimum 1 special character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegisterForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/*---------- Photo Url----- */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <div className="mb-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">
                      Accept our <a href="">Terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p>
                Already have an account? Please
                <Link to="/login">
                  <button className="btn btn-link">Login</button>
                </Link>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-2xl ">Login with:</p>
                <LoginPopUp></LoginPopUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
