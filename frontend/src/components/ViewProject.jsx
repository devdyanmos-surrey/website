import { Link, useLocation } from "react-router-dom";

export default function ViewProject() {
    
    const location = useLocation();
    let projectData = location.state.project;
    console.log(projectData);

    return (
        <div>
        <h1>Project View</h1>
        </div>
    );
}