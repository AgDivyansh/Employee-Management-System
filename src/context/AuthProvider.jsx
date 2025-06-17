import React, { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useEffect } from "react";
export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [userData, setUserData] = useState(null) ;
    setLocalStorage() ;
    const data = getLocalStorage() ;
    // console.log(data);

    useEffect(() => {
      const {employees, admin} = getLocalStorage() ;
      setUserData({employees, admin}) ;
    //   console.log(userData);
      
    }, [])
    
    
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;


 