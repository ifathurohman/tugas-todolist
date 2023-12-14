import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
    const [task, setTask] = useState({
        userId: "",
        id: "",
        title: "",
        completed: "todo" //can also be in progress or closed
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.title.length < 3)
            return toast.error("A task must have more than 3 characters");
        if (task.title.length > 100)
            return toast.error("A task must not be more than 100 characters");

        setTasks((prev) => {
            const list = [...prev, task];

            // localStorage.setItem("tasks", JSON.stringify(list));
            
            return list;
        });

        toast.success("Task Created")

        setTask({
            completed: "todo",
            id: "",
            title: "",
            userId: "",
        })
    };

    return (
        <>
            <div className="text-xl flex items-center justify-center gap-4 py-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Todo List
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border-2 bg-slate-100 rounded-md mr-4 h-12 px-4 w-[47rem]"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, id: uuidv4(), title: e.target.value })}
                />
                <button className="bg-indigo-600 rounded-md px-4 h-12 text-white">
                    Create Task
                </button>
            </form>
        </>
    );
}

export default CreateTask;