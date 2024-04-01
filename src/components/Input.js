import React, { useEffect, useState } from 'react'
import { Add } from '../Assets/index'
import TodoItem from './TodoItem';
function Input() {


    //IntialTask store the initial tasks try to get from localstorege otherwise default tasks
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [
        {
            id: 1,
            text: 'Assignment To be Completed!',
            completed: false
        },
        {
            id: 2,
            text: 'Internship offer letter signature!',
            completed: false
        }
    ];

    //states declaration
    const [tasks, setTasks] = useState(initialTasks);
    const [text, setText] = useState('');

    useEffect(() => {
        // Save todo list data to local storage whenever tasks state changes
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    //function to add tasks
    function Addtask(e) {
        e.preventDefault(); //remove default behaviour
        if (text === "") {
            return
        } //stop from adding null todo's
        else {
            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setText('');
        }
    };

    //function to clear tasks
    function ClearTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    };

    //function to toggletask to show completedness
    function TaskToggle(id) {

        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            else {
                return task;
            }
        }));
    };

    return (
        <div>
            <form className='flex flex-row justify-center items-center'>
                <input className="inputbar rounded-md" value={text} type="text" name='todo' id='todo' placeholder='Type here..' onChange={e => setText(e.target.value)} />
                <button className='btn' onClick={Addtask} ><img src={Add} alt="Add" /></button>
            </form>

            {tasks.map(task => (
                //creating todoItems and sharing functions and key as props
                <TodoItem
                    key={task.id}
                    task={task}
                    ClearTask={ClearTask}
                    TaskToggle={TaskToggle}
                />
            ))}
        </div>
    )
}

export default Input