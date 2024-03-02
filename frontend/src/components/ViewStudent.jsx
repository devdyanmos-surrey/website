/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Breadcrumbs from "./utils/Breadcrumbs";
import AcademicTable from "./utils/AcademicTable";

export default function ViewStudent() {
  //get data from the backend /students
  //dummy project
  let pjKeys = ["name", "description", "status", "date"];
  let pjValues = [
    ["Project 1", "Description 1", "Ongoing", "2021-10-10"],
  ];

  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  let student = location.state.student;
  console.log(student);

  return (
    <>
    <Breadcrumbs>
        <li >
        <div className="flex items-center">
            <svg
            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
            />
            </svg>
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Convener
            </span>
        </div>
        </li>
        <li >
        <div className="flex items-center">
            <svg
            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
            />
            </svg>
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                students
            </span>
        </div>
        </li>
        <li aria-current="page">
        <div className="flex items-center">
            <svg
            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
            />
            </svg>
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                view-{student[0]}
            </span>
        </div>
        </li>
    </Breadcrumbs>

    <div className="h-screen flex flex-col items-center mt-48">
      <div className=" w-fit mb-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center py-8 px-12 self-center">
        <img
          className="w-32 h-32 mb-3 rounded-full object-cover shadow-lg"
          src="./student.png"
          alt="Bonnie image"
        />

        <div className="flex flex-col p-2">
          <h5 className=" text-xl font-medium text-sky-400 dark:text-blue-400 self-center mb-2">
            {student[1]}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <strong>URN: </strong>
            {student[0]}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Age:</strong> {student[2]}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Email:</strong> {student[3]}
          </span>
        </div>
        <div className="flex w-32 mt-4 md:mt-6 justify-evenly ">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </button>
          <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <Link to={from} state={{from: './view-students'} }>Back</Link>
          </button>
        </div>
      </div>
        <div>
        <AcademicTable headData={pjKeys} bodyData={pjValues} />
        </div>
    </div>
    </>
    
  );
}
