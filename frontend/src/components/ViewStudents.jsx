import AxiosInstance from "./Axios";
import React, { useState, useEffect } from "react";

export default function ViewStudents() {

    //get data from the backend /students
    const getData = () => {
        AxiosInstance.get(`students/`)
            .then((response) => {
                console.log(response.data);
            });
    }

    useEffect(() => {
        getData();
    }, []);
    
   

    return (
        <div>
        <h1 className="text-3xl font-bold underline"> List of Students</h1>
        </div>
    );
}