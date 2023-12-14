import { useEffect, useState } from "react";

import CreateTask from "./component/CreateTask";
import ListTasks from "./component/ListTasks";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);

  // console.log("tasks", tasks)

  useEffect(() => {
    // setTasks(JSON.parse(localStorage.getItem("tasks")));
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
      const todos = await response.json();
      setTasks(todos);
    } catch (error) {
      console.log('Error fetching todos:', error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="bg-slate-400 flex flex-col items-center pt-4 gap-4">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider >
  )
}

export default App
