import {useData} from "../pruebas";
import {TaskItem} from "./TaskItem";


export const TaskList = () => {

    const {data, setData} = useData();

    const tasks = data.tasks;

    const handleTaskChange = (index) => () => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                if (task.status !== "DONE") {
                    document.getElementById(task.id);
                    return {...task, isCompleted: !task.isCompleted, status: "DONE"};
                } else {
                    document.getElementById(task.id);
                    return {...task, isCompleted: !task.isCompleted, status: "TODO"};
                }
            }

            return task;
        });

        setData((prev) => ({...prev, tasks: newTasks}));
    };

    return (
        <article>
            <div className='title-header'>
                <h1>Task Planner</h1>
            </div>
           
                <text label="Task Addition"/>
            
            <br/>
            <br/>
           
                <text label="Current"/>
            
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <TaskItem
                            id={task.id}
                            name={task.name}
                            description={task.description}
                            assignedTo={task.assignedTo}
                            dueDate={task.dueDate}
                            status={task.status}
                            isChecked={task.isCompleted}
                            taskName={task.name}
                        />
                    );
                })}
            </ul>
        </article>
    );
};
