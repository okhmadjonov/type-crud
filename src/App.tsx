
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import EditTask from './components/EditTask/EditTask';
function App() {

 


  return (
    <>
      <Routes>
        <Route path='/' element={ <TaskList/>} />
        <Route path='/addtask' element={ <AddTask/>} />
        <Route path='/edittask' element={ <EditTask/>} />
        <Route path='*' element={<Navigate to="/" replace={ true} />} />
     </Routes>
    </>
  );
}

export default App;
