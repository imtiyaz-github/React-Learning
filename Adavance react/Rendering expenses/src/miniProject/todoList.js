// import { useState } from "react";


// function todoList() {

//     const [tasks,setTasks] = useState([]);
//     const [newTask,setNewTask] = useState(" ");
    
    
//     const  handleInpuChange = (event) => {
//           setNewTask(newTask.target.value);
//     };
    
    
//     const handleAddTask = () => {
//       if( newTask  !== " "){
//         setTasks([...tasks, {name:newTask, compeleted: false}]);
//         setNewTask('');
//       }
//     }
    
//     const handleEditTask = (index,newName) => {
//       const newTasks = [...tasks];
//       newTasks[index].name = newName;
//       setNewTask(newTasks);
//     }
    
//     const handleToggleComplete = (index) => {
//       const newTasks = [...tasks];
//       newTasks[index].compeleted = !newTasks[index].compeleted;
//     }
    
//     const handleDeleteTask = (index) => {
//       const newTasks = [...tasks];
//       newTasks.splice(index,1);
//       setNewTask(newTasks);
//     }
    
//     const incompleteTasks = tasks.filter(task => !task.compeleted).length;
    
//     return (
//       <div>
//       <h1>TO DO LIST</h1>
//       <input type="text"  placeholder="Add a Task" value={newTask} onChange={handleInpuChange}/> <br /> <br />
//       <button onClick={handleAddTask}>Add</button>
//       <p>{incompleteTasks} tasks Remaining</p>
//       <ul>
//         {tasks.map((task,index) => (
//             <li key={index}>
//               <input type="checkbox" checked={task.compeleted} onChange={() => 
//                 handleToggleComplete(index)}
//                />
//                <input type="text" value={task.name} onChange={(event) => handleEditTask(index,event.target.value)} 
//                className={task.compeleted ? 'complted' : " "} />
//                 <button onClick={() => handleDeleteTask(index)}>Delete</button>
//             </li>
//         ))};
//       </ul>
//       </div>
//     )
    
//     }


// export default todoList;