/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AxiosInstance from "../Axios";
import DropDown from "./DropDown";

export default function Table({ data }) {
  //get acad data
  const [acaData, setAcaData] = useState([]);
  const dropDownRef = useRef(null);

  //fetch data from backend for students

  const getData = async () => {
    try {
      const academicResponse = await AxiosInstance.get(`academics/`);
      setAcaData(academicResponse.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //get current path
  const location = useLocation();
  const { pathname } = location;

  let toPath = "";
  if (pathname === "/convener") {
    toPath = "/view-students";
  } else if (pathname === "/academics") {
    toPath = "/view-academics";
  } else {
    toPath = "/view-project";
  }

  let keys = Object.keys(data[0]);
  let values = data.map((student) => Object.values(student));
  // console.log(values);
  keys.map((key, index) => {
    if (key.toString().includes("responsible_academics_1")) {
      keys[index] = "1st Marker";
    } else if (key.includes("responsible_academics_2")) {
      keys[index] = "2nd Marker";
    }
  });

  //click event handler
  const clickEventHandler = (_stu) => {
   
      const selectElement = dropDownRef.current.getSelectElement();
      console.log(selectElement);

  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-md m-auto mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {keys.map((head, index) => {
              if (head !== "age" && head !== "module") {
                return (
                  <th key={index} scope="col" className="px-6 py-3">
                    {head}
                  </th>
                );
              }
              return null;
            })}
             <th scope="col" className="px-6 py-3">
              <span className="sr-only">Update</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {values.map((row, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {row.map((body, index) => {
                if (index !== 2 && index !== 4) {
                  if (index === 5 || index === 6) {
                    return (
                      <td key={index} className="px-6 py-4 whitespace-nowrap">
                        <DropDown  data={acaData}  ref={dropDownRef}/>
                      </td>
                    );
                  }
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {body}
                    </td>
                  );
                }
              })}

              <td className="px-6 py-4 text-right">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => clickEventHandler(row)} // Pass the rowData to clickEventHandler
                >
                  Update
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                <Link
                  to={toPath}
                  state={{ from: { pathname }, student: row }}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  // Pass the rowData to clickEventHandler
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
