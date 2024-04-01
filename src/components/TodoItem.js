import React from 'react'

//handling props to manage todoItems
function TodoItem({ task, ClearTask, TaskToggle }) {
    function handlechange() {
        TaskToggle(task.id);
    };


    return (
        <div className='todoitem m-2 flex flex-row justify-center items-center '>
            <input className='checkbox' type="checkbox" checked={task.completed} onChange={handlechange} />

            {/* declaring new classname if toggleis set to true */}

            <p className={`todotext ml-2 font-semibold ${task.completed ? 'completed' : ''} `}>{task.text}</p>

            <button onClick={() => ClearTask(task.id)} className='dltbtn border pl-2 pr-2 m-1 bg-red-500 text-white rounded-md'>X</button>
        </div>


    )
}

export default TodoItem