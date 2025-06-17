import React, { useState } from "react";

function Login({handelLogin}) {
  const submitHandel = () => {
    // e.preventDefault() ;
    console.log(`form submit hoo gaya `);
    console.log(`email of user is: ${email}`);
    console.log(`and password of the use is : ${password}`);
    
    handelLogin(email, password) ;

    // resetting email and password to blank to resue the login page
    setEmail('') ;
    setPassword('') ;
    
  };

    // console.log(handelLogin);
    
  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('') ;
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Login */}
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            submitHandel();
          }}
        >
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            // name=""
            // id=""
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <br />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="password"
            // name="" id=""
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value) 
            }}
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
