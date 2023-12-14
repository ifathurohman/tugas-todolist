import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";

import Header from "./Header";
import Task from "./Task";

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {

    // console.log(status)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    let text = "Todo";
    let bg = "bg-orange-400";
    let tasksToMap = todos;

    if (status === false) {
        text = "In Progress"
        bg = "bg-sky-400"
        tasksToMap = inProgress
    }

    if (status === true) {
        text = "Completed"
        bg = "bg-green-500"
        tasksToMap = closed
    }

    const addItemToSection = async (id) => {
        console.log("dropped", id, status)
        setTasks((prev) => {
            // console.log("prev", prev);
            const mTasks = prev.map(t => {
                if (t.id === id) {
                    console.log(t)
                    return { ...t, completed: status }
                }
                return t;
            });

            // localStorage.setItem("tasks", JSON.stringify(mTasks));
            toast("Task Status Changed", { icon: "😁" })
            return mTasks;
        });
    }

    return (
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 && tasksToMap.map((task => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />))}
        </div>
    );
};

export default Section;