
import {  NavLink } from 'react-router-dom'
import { BiAddToQueue } from 'react-icons/bi';
import {FiEdit} from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import data from './data';
import './TaskList.scss'
import { useEffect, useState } from 'react';

const TaskList = () => {
    // const taskProcess = [{ name: "To Do", id: 1 }, {name: "In Progress", id: 2}, {name:"Done", id: 3}];
    const taskProcess = ["To Do", "In Progress", "Done"]
    const [process, setProcess] = useState(taskProcess[0]);
    const [step, setStep] = useState(1);

    const handleProcess = () => {       
        
             setStep(prev => prev + 1); 
                    
            }
    console.log(step);
    
    useEffect(() => {   
      if (step == 1) {
            setProcess(taskProcess[0])
        } else if (step == 2) {
                setProcess(taskProcess[1])
        } else if (step === 3) {
            setProcess(taskProcess[2])
        } else if (step < 0 || step >= 4) {
            setStep(1);
            setProcess(taskProcess[0])
                }
       
    }, [step])
    

    return (
      <div className='app'>
    <div className="app__container">
        <div className="app__container__top">
          <p>Task List</p>
          <NavLink to="/addtask" className="addTask"><BiAddToQueue/></NavLink>
        </div>
        <div className="app__container__body">
          {data.map((item,index) => (
              <div className="body__card__item" key={item.id}>
              <div className="taskName">
                <p>Task</p>
                <h3>{ item.taskName}</h3>
              </div>
              <div className="taskPrioritet">
              <p>Priority</p>
                      <h3 className={item.priority.toLocaleLowerCase() === 'high' ? "high" :
                              item.priority.toLocaleLowerCase() === 'low'? "low" :       
                              item.priority.toLocaleLowerCase() === 'medium'? "medium" : "high"
                    }>{item.priority}</h3>
              </div>
                                  
                  <div className="taskProcess" key={item.id} onClick={() => handleProcess()}>{process}</div>

                  <div className="taskCircle"><div className="circle"></div></div>
              <div className="taskEdit"><NavLink to="/edittask" className="taskedit__icon"><FiEdit/></NavLink></div>
              <div className="taskDelete"><NavLink to="/delete" className="taskdelete__icon"><RiDeleteBin5Line/></NavLink></div>
            </div>
          )) }
        </div>
     </div></div>
  );
}

export default TaskList;
