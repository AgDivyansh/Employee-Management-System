import React from "react";

function TaskList() {
  return (
    <div className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16  tasklist">
      <div className="h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm"> High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur libero quam rem, earum ducimus.</p>
      </div>
      <div className="h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm"> High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur libero quam rem, earum ducimus.</p>
      </div>
      <div className="h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm"> High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur libero quam rem, earum ducimus.</p>
      </div>
      <div className="h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm"> High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur libero quam rem, earum ducimus.</p>
      </div>
    </div>
  );
}

export default TaskList;
