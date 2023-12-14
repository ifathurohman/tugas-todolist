import { useEffect, useState } from "react";

import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        const fTodos = Array.from(tasks).filter((task) => task.completed === "todo");
        const fInProgress = Array.from(tasks).filter((task => task.completed === false));
        const fClosed = Array.from(tasks).filter((task => task.completed === true));

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks]);

    // console.log(tasks)

    const statuses = ["todo", false, true];

    console.log(tasks)
    
    return (
        <div className="flex gap-16 mb-[6rem]">
            {statuses.map((status, index) => (
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                />
            ))}
        </div>
    );
};

export default ListTasks;