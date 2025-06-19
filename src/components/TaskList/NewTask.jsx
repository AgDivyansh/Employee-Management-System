import React from 'react'

function NewTask() {
  return (
    
      <div className="h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm"> High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h1>New task</h1>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur libero quam rem, earum ducimus.</p>
        <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
      </div>
    
  )
}

export default NewTask
