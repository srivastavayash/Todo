import React from 'react'
import { Add } from '../Assets/index'
function Input() {
  return (
    <div>
        <form className='flex flex-row justify-center items-center'>
            <input className="inputbar rounded-md" type="text" name='todo' id='todo' placeholder='Type here..'/>
            <button className='btn'><img src={Add} alt="Add" /></button>
        </form>
    </div>
  )
}

export default Input