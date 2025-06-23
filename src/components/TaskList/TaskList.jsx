import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  // console.log(data);

  return (
    <div className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16  tasklist">
      {/* <AcceptTask /> */}
      {/* <NewTask /> */}
      {/* <CompleteTask /> */}
      {/* <FailedTask /> */}

      {data.tasks.map((elem, idx) => {
        // console.log(elem);
        if (elem.active) {
          return <AcceptTask key={idx} data = {elem} />
        }
          if (elem.NewTask) {
            return<NewTask key={idx} data = {elem} />
          }
          if (elem.completed) {
            return <CompleteTask key={idx} data = {elem} />
          }
          if (elem.failed)
          {
            return <FailedTask key={idx} data = {elem} />
          }
        
      })}
    </div>
  );
}

export default TaskList;
