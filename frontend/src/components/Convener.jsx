import { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import ConvenerNav from "./utils/ConvenerNav";
import Table from "./utils/Table";
import Breadcrumbs from "./utils/Breadcrumbs";
// import { useLocation } from "react-router-dom";

export default function Convener() {
  // student, academics, convener contents
  const [stuData, setStuData] = useState([]);
  // const location = useLocation();
  // const { from } = location.state || { from: { pathname: "/" } };

  //fetch data from backend for students

  const getData = async () => {
    try {
      const response = await AxiosInstance.get(`students/`);
      setStuData(response.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let [content, setContent] = useState(<p>This is your profile</p>);
  let [currentLocation, setCurrentLocation] = useState("profile");

  let curBreadcrumb = (
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
            Convener
        </span>
      </div>
    </li>
  );

  const clickHandler = (e) => {
    //prevent default
    e.preventDefault();
    let targetName = e.target.children[1].innerHTML;

    if (targetName === "Students") {
      let keys = Object.keys(stuData[0]);
      let values = stuData.map((student) => Object.values(student));
      setContent(<Table headData={keys} bodyData={values} />);
      setCurrentLocation("students");

    } else if (targetName === "Academics") {
      setContent(<p>This is a list of current Academics</p>);
      setCurrentLocation("academics");
    } else if (targetName === "Profile") {
      setContent(<p>This is your profile</p>);
      setCurrentLocation("profile");
    }
    // console.log(targetName);
  };

  return (
    <>
      <Breadcrumbs> {curBreadcrumb} </Breadcrumbs>
      <div>{content}</div>
      <ConvenerNav onClickHandler={clickHandler} currentTab={currentLocation} />
    </>
  );
}
