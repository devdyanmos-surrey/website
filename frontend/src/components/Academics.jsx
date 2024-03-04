import { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import Breadcrumbs from "./utils/Breadcrumbs";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



let moderationStatus = "pending"
export default function Academics() {

  let academicId = 2;

  const location = useLocation();
  const { pathname } = location;

  const [projectData, setProjectData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [markData, setMarkData] = useState([]);

  const getData = async () => {
    try {
      const projectsResponse = await AxiosInstance.get(`projects/`);
      const studentsResponse = await AxiosInstance.get(`students/`);
      const marksResponse = await AxiosInstance.get(`mark/`);
      projectsResponse.data = projectsResponse.data.filter(
        (project) => project.marked_by === academicId
      );
      setProjectData(projectsResponse.data);
      setMarkData(marksResponse.data);
      setStudentData(studentsResponse.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(markData);

  const checkModerationStatus = (curPrjID) => {
    if (markData.length > 0) {
      markData.map((eachMark) => {
        console.log(eachMark.project, curPrjID, "in", moderationStatus);
        if (eachMark.project !== curPrjID) {
          if (moderationStatus !== "failed" && moderationStatus !== "approved") {
            moderationStatus = "pending";
            return; // Replace 'break;' with 'return;'
          }
          // console.log(eachMark.project, curPrjID, moderationStatus);
        }
  
        if (
          eachMark.project === curPrjID &&
          eachMark.marked_by === academicId
        ) {
          firstTotalMark = eachMark.total_mark;
          moderationStatus = "pending";
          return;
          // console.log(
          //   eachMark.project,
          //   curPrjID,
          //   eachMark.marked_by,
          //   academicId,
          //   moderationStatus
          // );
        }
  
        if (
          eachMark.project === curPrjID &&
          eachMark.marked_by !== academicId
        ) {
          sndTotalMark = eachMark.total_mark;
          if (firstTotalMark !== null && sndTotalMark !== null) {
            if (Math.abs(firstTotalMark - sndTotalMark) >= 10) {
              moderationStatus = "failed";
              return;
              // console.log(
              //   eachMark.project,
              //   curPrjID,
              //   eachMark.marked_by,
              //   academicId,
              //   moderationStatus
              // );
            } else {
              moderationStatus = "approved";
              return;
              // console.log(
              //   eachMark.project,
              //   curPrjID,
              //   eachMark.marked_by,
              //   academicId,
              //   moderationStatus
              // );
            }
          }
        }
      });
      
    }
  }; // Add closing parenthesis here

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
          Academics
        </span>
      </div>
    </li>
  );

  let submissionStatus = false;
  const checkSubmissionStatus = (curPrj) => {
    AxiosInstance.get(`mark/`).then((response) => {
      response.data.map((eachMark) => {
        if (
          eachMark.project === curPrj.project_id &&
          eachMark.academic === academicId
        ) {
          submissionStatus = true;
        }
      });
      return submissionStatus;
    });
  };

  let firstTotalMark = null;
  let sndTotalMark = null;

  return (
    <div>
      <Breadcrumbs> {curBreadcrumb} </Breadcrumbs>
      <div className="p-12">
        <div className="flex items-center text-center justify-center p-4">
          <h1> List of assigned Projects </h1>
        </div>
        <div className=" h-[50vh] w-[60%] m-auto">
          <Carousel className="bg-slate-600 p-6 rounded-md" slide={false}>
            {projectData.map((project) => {
              return (
                <div
                  key={project.project_id}
                  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <p href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.name}
                    </h5>
                  </p>
                  <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Assigned To
                      </dt>
                      <dd className="text-lg font-semibold">
                        {studentData.map((student) => {
                          if (student.urn === project.student) {
                            return student.name + " (" + project.student + ")";
                          }
                        })}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Student's Mail
                      </dt>
                      <dd className="text-lg font-semibold">
                        {studentData.map((student) => {
                          if (student.urn === project.student) {
                            return student.mail;
                          }
                        })}
                      </dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Moderation Status
                      </dt>
                      <dd className="text-lg font-semibold">
                        <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          <span className="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                          Moderation {checkModerationStatus(project.project_id)}{" "}
                          {moderationStatus}
                        </span>
                      </dd>
                    </div>
                  </dl>
                  <Link
                    to={"/mark-project/"}
                    state={{
                      from: { pathname },
                      currentProject: project,
                      academic_id: academicId,
                    }}
                    className="mt-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Start Marking
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
