import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({data}) {

  // console.log(`After the login of employee data is : `);
  // console.log(data);
  
  
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      {/* <h1>{data.id}</h1>
      <h2>First Name : {data.firstName}</h2> */}
      {/* Employee  */}
      <Header data = {data} />
      <TaskListNumbers data = {data} />
      <TaskList data = {data} />
    </div>
  );
}

export default EmployeeDashboard;
