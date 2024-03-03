/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AxiosInstance from "../Axios";
import DropDown from "./DropDown";

export default function Table({ data }) {
  //get acad data
  const [acaData, setAcaData] = useState([]);
  const [studentData, setStudentData] = useState(data);

  const dropDownRef = useRef(null);
  const dropDownRef2 = useRef(null);

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

  // eslint-disable-next-line no-unused-vars
  let stMarkerID = null;
  // eslint-disable-next-line no-unused-vars
  let ndMarkerID = null;

  const updateStudent = async (student) => {
    try {
      const drop1option = dropDownRef.current.getSelectElement();
      const drop2option = dropDownRef2.current.getSelectElement()
      acaData.map((aca) => {
        if (aca.name === (drop1option)) {
          stMarkerID = parseInt(aca.acad_id);
        } else if (aca.name === (drop2option)) {
          ndMarkerID = parseInt(aca.acad_id);
        }
      });
  //  fields = ('urn','name', 'age', 'mail', 'module', 'responsible_academics_1', 'responsible_academics_2')

      console.log(studentData);
      // eslint-disable-next-line no-unused-vars
      const response = await AxiosInstance.put(`students/${student[0]}/`, {
        urn: student[0],
        name: student[1],
        age: student[2],
        mail: student[3],
        module: student[4],
        "responsible_academics_1" : stMarkerID,
        "responsible_academics_2": ndMarkerID,
      }).then((response) => {
        setStudentData(response.data);
      });
      
    } catch (error) {
      console.error("Error updating student data:", error);
    }
  }

  //click event handler
  const clickEventHandler = (_stu) => {
   

    updateStudent(_stu);
    

    // console.log(drop1option, drop2option);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg m-auto mt-12">
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
                  if (index === 5) {
                    return (
                      <td key={index} className="px-6 py-4 whitespace-nowrap">
                        <DropDown data={acaData} ref={dropDownRef} />
                      </td>
                    );
                  }else if (index === 6) {
                    return (
                      <td key={index} className="px-6 py-4 whitespace-nowrap">
                        <DropDown data={acaData} ref={dropDownRef2} />
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
