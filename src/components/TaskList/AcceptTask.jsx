import React from "react";

function AcceptTask({data}) {
  return (
    <div className="h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5">
      <div className="flex justify-between">
        <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm"> {data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2>Accepted Task</h2>
      <h2 className=" mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="flex justify-between mt-6 ">
        <button className="bg-green-500 rounded font-medium py-1 px-2 text-xs">
          Mark as Completed
        </button>
        <button className="bg-red-500 rounded font-medium py-1 px-2 text-xs">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
