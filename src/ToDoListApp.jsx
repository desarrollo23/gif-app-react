import { useState } from "react"

export const ToDoListApp = () => {


    const [list, setList] = useState([]);
    const [task, setTask] = useState('');

    const onChangeTask = (e) => {
        setTask(e.target.value);
    }

    const onCLickAddTask = () => {

        if(task.trim() === ''){
            return;
        }

        const newTaskObj = {
            id: list.length + 1,  // ID único para cada tarea
            text: task,
            completed: false,
        };

        setList([...list, newTaskObj]);
        setTask('');
    }

    const onClickDeleteTask = (id) => {
        const updatedTasks = list.filter( (item) => item.id !== id);

        setList(updatedTasks);
    }

    const onClickCompleteTask = (id) => {
        const updatedTasks = list.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
          );

          setList(updatedTasks); 
    }

    return (
        <>
             <input type="text" placeholder="Type new task..." onChange= {onChangeTask} value={task}/>
             <button onClick={onCLickAddTask}>Add</button>

            <ul>
                { list.map( (item) => {
                    return <li key={item.id}>
                        <span
                        style={{ textDecoration: item.completed ? "line-through" : "none" }}
                        onClick={() => onClickCompleteTask(item.id)}
                        >
                        {item.text}
                        </span>
                        <button onClick={() => onClickDeleteTask(item.id)}>X</button>
                  </li>
                })}
            </ul>
        </>
    )
}