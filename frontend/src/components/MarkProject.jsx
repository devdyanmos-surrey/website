import AxiosInstance from "./Axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MarkProject() {
  const location = useLocation();
  const navigate = useNavigate()
  let projectData = location.state.currentProject;
  let academicId = location.state.academic_id;
  const [totalMark, setTotalMark] = useState(0);

  //
  //   console.log(projectData);

  //   console.log(projectData);

  const [marksData, setMarksData] = useState([]);
  const [formData, setFormData] = useState({
    project: projectData.id,
    total_mark: totalMark,
    comments: "",
    style_criteria: 0,
    syntax_criteria: 0,
    functional_criteria: 0,
  });

  const getData = async () => {
    try {
      const marksResponse = await AxiosInstance.get(`mark/`);
      setMarksData(marksResponse.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let putOrPost = "POST";  
  let markId = null; 
  marksData.map((mark) => {
        if(mark.project === projectData.project_id && mark.marked_by === academicId){
            putOrPost = "PUT";
            markId = mark.id;
        }
        
    });


  //   console.log(projectData.project_id);

  let condition = false;
  let myI = null;
  marksData.map((mark, index) => {
    if (mark.project === projectData.project_id) {
      condition = true;
      myI = index;
    }
  });

//   console.log(marksData);




  

  const onChangeHandler = (e) => {
    

    setFormData((prev) => ({
        ...prev,
        [e.target.id]: e.target.value
    }));

    // console.log(functional_criteria.value, style_criteria.value, syntax_criteria.value);

    // setTotalMark((prev) => ;
        
   
    let functional = parseInt(formData.functional_criteria) || 0;
    let style = parseInt(formData.style_criteria) || 0;
    let syntax = parseInt(formData.syntax_criteria) || 0;

    if( e.target.id === "functional_criteria"){
        functional = parseInt(e.target.value);
    }else if( e.target.id === "style_criteria"){
        style = parseInt(e.target.value);
    }else if( e.target.id === "syntax_criteria"){
        syntax = parseInt(e.target.value);
    }
  
    const newTotalMark = (functional + style + syntax) / 3;

    // Update the total_mark state
    setTotalMark(newTotalMark);
        
//   console.log(functional, style, syntax);

    
  };

 

    const submitHandler = async (e) => {
        e.preventDefault();
        let comments = document.getElementById("comment").value;
        let functional = parseInt(document.getElementById("functional_criteria").value);
        let marked_by = academicId;
        let project = projectData.project_id;
        let style = parseInt(document.getElementById("style_criteria").value);
        let syntax = parseInt(document.getElementById("syntax_criteria").value);
        let total_mark = totalMark;

        if(putOrPost === "Post"){
            AxiosInstance.post(`mark/`, {
                comments: comments,
                functional_criteria: functional,
                marked_by: marked_by,
                project: project,
                style_criteria: style,
                syntax_criteria: syntax,
                total_mark : total_mark,
            })
                .then((response) => {
                    navigate("/academics");
                    console.log(response);
                })
                .catch((error) => {
                    console.error("Error marking project:", error);
                });
        }else {
            AxiosInstance.put(`mark/${markId}/`, {
                comments: comments,
                functional_criteria: functional,
                marked_by: marked_by,
                project: project,
                style_criteria: style,
                syntax_criteria: syntax,
                total_mark : total_mark,
            })
                .then((response) => {
                    navigate("/academics");
                    console.log(response);
                })
                .catch((error) => {
                    console.error("Error marking project:", error);
                });
        }

     
    };

    console.log(marksData);

    marksData.map((mark) => {
        console.log(mark);
    });


  return (
    <div className="h-screen flex items-center justify-center" >
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {projectData.name}
          </h5>
          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Functional Criteria
            </label>
            <input
            onChange={onChangeHandler}
                
              type="number"
              name="functional_criteria"
              id="functional_criteria"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="0"
              required
            />
          </div>
          <div>
            <label
              htmlFor="syle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Style Criteria
            </label>
            <input
            onChange={onChangeHandler}
              type="number"
              name="style_criteria"
              id="style_criteria"
              placeholder="0"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
         

          <div>
            <label
              htmlFor="syle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Syntax Criteria 
            </label>
            <input
            onChange={onChangeHandler}
              type="number"
              name="synatax_criteria"
              id="syntax_criteria"
              placeholder="0"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="total_mark"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Total Mark
            </label>
            <input
            readOnly={true}
            onChange={onChangeHandler}
              type="number"
              name="total_mark"
              id="total_mark"
              placeholder="0"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              value={totalMark}
            />
          </div>

          <div>
            <label
              htmlFor="syle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Comments
            </label>
            <textarea
            onChange={onChangeHandler}
              type="text"
              name="comment"
              id="comment"
              placeholder="comments"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type=""
            onClick={submitHandler}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
