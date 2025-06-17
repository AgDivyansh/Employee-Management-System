import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  useEffect(() => {
    // setlocalStorage()
    setLocalStorage();
    getLocalStorage();
  });

  const [user, setUser] = useState(null);
  // console.log(`value of user is: ${user}` );

  const authData = useContext(AuthContext);

  useEffect(() => {
    // if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        // const loggedInUser = JSON.parse(loggedInUser);
        setUser(loggedInUser.role);
      }
    // }
  }, [authData]);

  const handelLogin = (email, password) => {
    console.log(`handel login function is called`);
    if (email == "admin@me.com" && password == "123") {
      console.log(`This is Admin`);
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      // console.log(user);
    } else if (
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
      console.log(`This is user `);
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
      // console.log(user);
    } else {
      alert(`invalid cred`);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  // handelLogin('admin@me.com', '123') ;

  console.log(authData);

  // console.log();
  
  // console.log(user);
  

  return (
    <>
      {/* <Login /> */}
      {/* if user is not preset at our website then load the login page on the desktop  */}
      {user ? "" : <Login handelLogin={handelLogin} />}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* we can not use if condition in return block  */}
      {/* if (!user)
        {
          <Login />
        } */}

      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
