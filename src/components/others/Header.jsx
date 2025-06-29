import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

function Header(props) {
  // console.log(data);

  // const [userName, setUserName] = useState('') ;

  // if (!data)
  // {
  //   // setUserName = data.firstName ;
  //   setUserName('Admin') ;
  // }
  // else{
  //   // setUserName = "Admin" ;
  //   setUserName(data.fisrtName) ;
  // }


  // setUserName(data?.firstName || "Admin") ;
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '') ;
    props.changeUser('')
    // window.location.reload() ;

    console.log(props.changeUser);
    

  }
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">userName👋</span>
      </h1>
      <button 
        onClick={logOutUser}
      className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
