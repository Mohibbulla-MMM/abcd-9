import { useContext } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const LoginPopUp = () => {
  const { googleLoginPopUp } = useContext(AuthContext);
  const handleMailLogin = (media) => {
    media()
      .then(() => {
        toast.success("Login Success");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="inline-block">
      <div>
        <span
          onClick={() => handleMailLogin(googleLoginPopUp)}
          className="text-3xl btn btn-circle bg-blue-700 text-white"
        >
          <AiOutlineGoogle></AiOutlineGoogle>
        </span>
      </div>
    </div>
  );
};

export default LoginPopUp;
