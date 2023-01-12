import { useState } from "react";
import Header from "./components/Header"


function App() {

  const [tasks,setTask] = useState([{
    id:"1",
    text:"first task"
},
{
    id:"2",
    text:"second task"
}
])

  return (
    <div className="App">
      <Header 
        tasks={tasks}
      />
    </div>
  );
}

export default App;
