import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (name, course) => {
    const newStudent = { id: students.length + 1, name, course };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Student Recording System</h1>
        <div className="image-container">
          <img src="pfp.jpg" alt="Student" className="Costanilla-image" />
        </div>

        <StudentForm addStudent={addStudent} />

        <h3>Student List</h3>
  
      </div>
    </div>
  );
};

export default App;
