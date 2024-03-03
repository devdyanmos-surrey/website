/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { Datepicker } from 'flowbite-react';
import { useState, useEffect, useRef } from "react";
import { Axios } from "axios";
import AxiosInstance from "../Axios";
import {useNavigate} from "react-router-dom";

export default function ProjectTable({
  headData,
  bodyData,
  addFeature,
  studentsData,
  acaData,
  studentData,
}) {
  //get current path
  const location = useLocation();
  const { pathname } = location;

  const [headstateData, setHeadData] = useState(headData);
  const [bodystateData, setBodyData] = useState(bodyData);

  let toPath = "";
  if (pathname === "/convener") {
    toPath = "/view-students";
  } else if (pathname === "/academics") {
    toPath = "/view-academics";
  } else {
    toPath = "/view-students";
  }


  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    // document.getElementById("date").value
    const formattedDeadline = formatDate(document.getElementById("date").value);
 

    AxiosInstance.post("projects/", {
      name: document.getElementById("name").value,
      student:parseInt( document.getElementById("student").value),
      marked_by: parseInt( document.getElementById("academics").value),
      desciption: document.getElementById("description").value,
      deadline:formattedDeadline,
    })
    .then((response) => {
      
      // console.log(response);
      
      // navigate(toPath)
    })
    .catch((error) => {
      // console.log(error);
    
    })

    AxiosInstance.get("projects/")
    .then((response) => {
      // console.log(response);
      // setBodyData(response.data);
      console.log(response.data);
      response.data.map((project) => {
        // console.log(project);
      });
    })




  };

 
 
  let headerAction = <span className="sr-only">View</span>;
  if (addFeature === "yes") {
    headerAction = (
      <>
        <button
          type="button"
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          data-tooltip-target="tooltip-add"
          className=" px-3 pb-1 self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span className=" text-2xl ">+</span>
        </button>

        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Project
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <form className="p-4 md:p-5" onSubmit={submitHandler}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Project name"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Assign Student
                    </label>
                    <select
                      id="student"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>Select category</option>
                      {studentsData.map((student, index) => (
                        <option key={index} value={student["urn"]}>
                          {student["name"]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Assign Marker
                    </label>
                    <select
                      id="academics"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>Select Academic</option>
                      {acaData.map((aca, index) => (
                        <option key={index} value={aca["acad_id"]}>
                          {aca["name"]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write project description here"
                    ></textarea>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Deadline
                    </label>
                  <Datepicker id="date" onChange={(e) => {console.log(e);}} minDate={new Date(2024, 0, 1)} />
                   
                  </div>
                </div>
                <button
                  type=""
                  data-modal-toggle="crud-modal"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new product
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          id="tooltip-add"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Add Project
          <div className="tooltip-default" data-popper-arrow></div>
        </div>
      </>
    );
  }

  console.log(bodyData);

  //click event handler
  const clickEventHandler = (_stu) => {};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-md m-auto mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headData.map((head, index) => {
              if (!(head == "marked" || head == "desciption")) {
                return (
                  <th key={index} scope="col" className="px-6 py-3">
                    {head}
                  </th>
                );
              }
            })}
            <th
              scope="col"
              className="px-4 py-3 flex flex-row items-center justify-center"
            >
              {headerAction}
            </th>
          </tr>
        </thead>
        <tbody>
          {bodyData.map((row, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {row.map((body, index) => {
                if (index !== 4 && index !== 6) {
                  return (
                    <td
                      key={index}
                      className="px-6 py-4 whitespace-nowrap text-center"
                    >
                      {body}
                    </td>
                  );
                }
              })}

              <td className="px-6 py-4 text-right items-center">
                <button
                  type="button"
                  data-modal-target="static-modal"
                  data-modal-toggle="static-modal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => clickEventHandler(row)} // Pass the rowData to clickEventHandler
                >
                  View
                </button>
                {/* modal */}
                <div
                  id="static-modal"
                  data-modal-backdrop="static"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* <!-- Modal header --> */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Project Details
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="static-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      {/* <!-- Modal body --> */}
                      <div className="p-4 md:p-5 space-y-4 text-left">
                        <dl className="max-w-xl text-gray-900 divide-y divide-gray-600 dark:text-white ">
                          <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                              Project Name
                            </dt>
                            <dd className="text-lg font-semibold">{row[1]}</dd>
                          </div>
                          <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                              Assigned to
                            </dt>
                            <dd className="text-lg font-semibold">
                              {studentData[1]} | {row[3]} | {studentData[3]}
                            </dd>
                          </div>
                          <div className="flex flex-col pt-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                              Project Description
                            </dt>
                            <dd className="text-lg font-semibold">
                              <p>{row[6]}</p>
                            </dd>
                          </div>
                          <div className="flex flex-col pt-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                              Marked by
                            </dt>
                            <dd className="text-lg font-semibold">
                              <p>{row[5]}</p>
                            </dd>
                          </div>
                          <div className="flex flex-col pt-3 mb-2">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                              Marked
                            </dt>
                            <dd className="text-lg font-semibold">
                              <p className="mb-2">
                                {row[4] === "No" ? (
                                  <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                    <span className="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                                    Marking in Progress
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                                    Mark Released to Student
                                  </span>
                                )}
                              </p>
                            </dd>
                          </div>
                          <div className="flex flex-col pt-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                              Marking by
                            </dt>
                            <dd className="text-lg font-semibold">
                              <p>{row[5]}</p>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
