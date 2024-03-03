import { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import ConvenerNav from "./utils/ConvenerNav";
import Table from "./utils/Table";
import AcademicTable from "./utils/AcademicTable";
import Breadcrumbs from "./utils/Breadcrumbs";
// import { useLocation } from "react-router-dom";

export default function Convener() {
  // student, academics, convener contents
  const [stuData, setStuData] = useState([]);
  const [acaData, setAcaData] = useState([]);
  const [convenerData, setConvenerData] = useState([]);
  let [content, setContent] = useState(<p>Welcome to the Convener Dashboard</p>);
  let convenerValues = null;
  

  const getData = async () => {
    try {
      const stuResponse = await AxiosInstance.get(`students/`);
      const academicResponse = await AxiosInstance.get(`academics/`);
      const convenerResponse = await AxiosInstance.get(`convener/`)
      .then((response) => {
        setConvenerData(response.data);
        
      });

      // console.log(academicResponse.data);
      setStuData(stuResponse.data);
      setAcaData(academicResponse.data);
      
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  convenerData.map((convener) => {
    console.log(convener);
    //get convener values
   
    convenerValues = Object.values(convener);
    console.log(convenerValues);
    


     
   });

 


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
      keys.map( (key, index) => {
        if (key.toString().includes("responsible_academics_1")) {
          keys[index] = "1st Marker";
        } else if (key.includes("responsible_academics_2")) {
          keys[index] = "2nd Marker";
        }
      });

      setContent(<Table data={stuData}   />);
      setCurrentLocation("students");

    } else if (targetName === "Academics") {

      let academicKeys = Object.keys(acaData[0]);
      let academicValues = acaData.map((academic) => Object.values(academic));

      setContent(<AcademicTable headData={academicKeys} bodyData={academicValues} addFeature="no" />);
      setCurrentLocation("academics");
    } else if (targetName === "Profile") {
      setContent(

        <div className=" w-fit mb-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center py-8 px-12 self-center">
        <img
          className="w-32 h-32 mb-3 rounded-full object-cover shadow-lg"
          src="./student.png"
          alt="Bonnie image"
        />

        <div className="flex flex-col p-2">
          <h5 className=" text-xl font-medium text-sky-400 dark:text-blue-400 self-center mb-2">
            {convenerValues[1]}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <strong>URN: </strong>
            {convenerValues[0]}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Age:</strong> {convenerValues[2]}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Email:</strong> {convenerValues[3]}
          </span>
        </div>
        
      </div>

      );
      setCurrentLocation("profile");
    }
    // console.log(targetName);
  };

  return (
    <>
      <Breadcrumbs> {curBreadcrumb} </Breadcrumbs>
      <div className="flex items-center justify-center h-screen">{content}</div>
      <ConvenerNav onClickHandler={clickHandler} currentTab={currentLocation} />
    </>
  );
}
