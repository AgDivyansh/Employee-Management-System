import React, { useState, useEffect } from 'react'

function CreateTask() {


  const [taskTitle, setTaskTitle] = useState('') ;
  const [taskDescription, setTaskDescription] = useState('') ;
  const [taskDate, setTaskDate] = useState('') ;
  const [assignTo, setAssignTo] = useState('')  ;
  const [category, setCategory] = useState('') ;

  const [newTask, setNewTask] = useState({}) ;

  const submitHandler = (e) =>{
    e.preventDefault() ;

    // console.log(`submit ho gaya`);

    console.log(`Task details created by admin are :`);

    // console.log(`taskTitle: ${taskTitle}, taskDescription: ${taskDescription}, taskDate: ${taskDate}, assignTo: ${assignTo}, category: ${category}.`);
    
    setNewTask({taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false})
    

    const data = JSON.parse(localStorage.getItem('employees')) ;

    console.log(data);
    console.log(`value of data after traversing the loop :`);
    
    
    data.forEach( (elem) => {
        // console.log(elem.firstName);
        console.log(`enters in the loop ${assignTo}`);
        
        if (assignTo == elem.firstName)
        {
          // console.log(elem);
          elem.tasks.push(newTask) ;
          
        }
        
    });

    localStorage.setItem('employees', JSON.stringify(data)) ;

    setTaskTitle('') ;
    setCategory('') ;
    setAssignTo('') ;
    setTaskDescription('') ;
    setTaskDate('') ;

  }
  // useEffect(() => {
    
  //   console.log(task);
  
  // }, [task])
  

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form className="flex flex-wrap w-full items-start justify-between"
          onSubmit={(e) => {
            // e.preventDefault() ;
            submitHandler(e) ;

          }}
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"

                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value) ;
                }}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value)
                }}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value)
            }}
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
