/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';

export default function AcademicTable({ headData, bodyData }) {
    //get current path
    const location = useLocation();
    const { pathname } = location

    let toPath = ''
    if(pathname === '/convener'){
        toPath = '/view-students';
    }else if(pathname === '/academics'){
        toPath = '/view-academics';
    }else{
        toPath = '/view-project';
    }


    

    //click event handler
    const clickEventHandler = (_stu) => {
        

    }



  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-md m-auto mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            
            {headData.map((head, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {head}
              </th>
            ))}

            {/* <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>

            <th scope="col" className="px-6 py-3">
              Academics 1
            </th>

            <th scope="col" className="px-6 py-3">
              Academics 2
            </th> */}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody>

            {bodyData.map((row, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {row.map((body, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                        {body}
                    </td>
                    ))}

                    <td className="px-6 py-4 text-right">
                        <Link
                            to={toPath} state={{from: {pathname}, student: row}}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() => clickEventHandler(row)} // Pass the rowData to clickEventHandler
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