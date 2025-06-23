import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  const [user, setUser] = useState(null);
  const [loggedInUserDate, setLoggedInUserDate] = useState(null);

  // ✅ UPDATED LINE
  const { userData, setUserData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserDate(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    console.log(`handle login function is called`);
    if (email === "admin@me.com" && password === "123") {
      console.log(`This is Admin`);
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserDate(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert(`invalid cred`);
      }
    } else {
      alert(`invalid cred`);
    }
  };
  // console.log(`this is user which is currently login`);
  
  // console.log(loggedInUserDate);
  

  return (
    <>
      {user ? "" : <Login handleLogin={handleLogin} />}
      {user === "admin" ? <AdminDashboard changeUser = {setUser} /> : ""}
      {user === "employee" ? <EmployeeDashboard changeUser = {setUser} data={loggedInUserDate} /> : ""}
    </>
  );
}

export default App;
