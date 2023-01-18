import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {

  const [tasks,setTask] = useState([{
    id:"1",
    text:"first task",
    reminder: false
},
{
    id:"2",
    text:"second task",
    reminder: true
}
])

const deleteTask = (id)=>{
  setTask(tasks.filter((task)=>task.id!==id))
}

const addTask = (task)=>{
  let id = Math.floor(Math.random() * 10000)+1
  const newTask = {id, ...task}
  setTask([...tasks, newTask])
}

const toggleReminder = (id)=>{
  setTask(
    tasks.map((task)=>
    task.id===id ? {...task, reminder:!task.reminder} : task
  ))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length >0 ? <Tasks
        tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      />
      :'No tasks to show'
      }
    </div>
  );
}

export default App;
