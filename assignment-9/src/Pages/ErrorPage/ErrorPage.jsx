
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=" flex h-screen justify-center items-center">
      <div>
        <div>
          <h2 className="text-4xl mb-8">Oops!!!</h2>
        </div>
        <br />
        <div>
          <Link
            className="text-2xl border-2 border-red-600 bg-indigo-800 text-white py-1 px-4"
            to="/">
                Go Back to home
            </Link>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;