import React from 'react';
import './EditTask.scss'
import { NavLink } from 'react-router-dom';
import { IoMdSkipBackward } from 'react-icons/io';
const EditTask = () => {
  return (
    <div className='edittask'>
          <div className="edittask__container">
              <h1>Edit Task</h1>
              <NavLink to="/" className="goback"><IoMdSkipBackward/></NavLink>
      </div>
    </div>
  );
}

export default EditTask;
