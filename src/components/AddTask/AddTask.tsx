import React from 'react';
import './AddTask.scss'
import { NavLink } from 'react-router-dom';
import {IoMdSkipBackward} from 'react-icons/io'
const AddTask = () => {
  return (
    <div className='addtask'>
          <div className="addtask__container">
              <h1>Add Task</h1>
              <NavLink to="/" className="goback"><IoMdSkipBackward/></NavLink>
      </div>
    </div>
  );
}

export default AddTask;
