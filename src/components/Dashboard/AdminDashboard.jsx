import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard(props) {
  return (
    <div className="h-screen w-full p-7">
      {/* Admnin dash board */}
      <Header changeUser = {props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
