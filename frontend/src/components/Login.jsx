import { Link } from "react-router-dom";
import Navbar from "./utils/NavBar.jsx";
export default function Login() {
  return (
    <>
      {/* <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="w-full max-w-md flex items-center justify-center flex-col">
            <Link to="/convener"  as="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login as Convener
              </span>
            </Link>
            <Link to="/academics"  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login as Academic
              </span>
            </Link>
            <Link to="/student"  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login as Student
              </span>
            </Link>
        </div>
      </section> */}

      <Navbar />
      <section className="w-2/3	flex items-center justify-between m-auto flex-col">
        <h1 className="text-5xl my-16">Login</h1>
        <div className=" flex flex-col gap-10 ">
          <Link to="/student">
          <div className="max-w-md min-w-96 mx-auto bg-blue-900 rounded-xl shadow-md overflow-hidden flex flex-col items-center hover:bg-blue-600 ease-in-out duration-300 hover:scale-110	">
            <div className="p-6">
              <div className="text-xl  font-semibold mb-2">Student</div>
            </div>
          </div>
          </Link>
          <Link to="/convener">
          <div className="max-w-md min-w-96 mx-auto bg-blue-900 rounded-xl shadow-md overflow-hidden flex flex-col items-center hover:bg-blue-600 ease-in-out duration-300 hover:scale-110	">
            <div className="p-6">
              <div className="text-xl  font-semibold mb-2">Convener</div>
            </div>
          </div>
          </Link>
          <Link to="/academics">
          <div className="max-w-md min-w-96 mx-auto bg-blue-900 rounded-xl shadow-md overflow-hidden flex flex-col items-center hover:bg-blue-600 ease-in-out duration-300 hover:scale-110	">
            <div className="p-6">
              <div className="text-xl  font-semibold mb-2">Acadamic</div>
            </div>
          </div>
          </Link>

        </div>
      </section>
    </>
  );
}
