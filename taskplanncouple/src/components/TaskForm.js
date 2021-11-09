import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useData } from "../providers/DataProvider";

export const TaskForm = () => {
  const history = useHistory();
  const { data, setData } = useData();
  const { taskId } = useParams();
  const task = data.tasks.find((task) => task.id === taskId);

  const [text, setText] = useState(task?.name ?? "");
  const [textD, setDescription] = useState(task?.description ?? "");

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleChange = (e) => {
    const inputName = e.target.value;

    setText(inputName);
  };

  const handleSave = () => {
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: text,description:textD };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));

    history.goBack();
  };
  

  const handleCheckList = () => {
    let updateCheckbox = data.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setData(() => ({ ...data, tasks: updateCheckbox }));
  }

  const handleUno = (e) =>{
    const dos = e.target.value;
    setDescription(dos);

  }

  return (
    <form>
      <input
        type="text"
        placeholder="Task Name"
        value={text}
        onChange={handleChange}
      />
      <br/>
      <input 
       type="text"
       value={textD}
       onChange={handleUno}/>
       
      <input type="checkbox" checked={task.isCompleted} onChange={() => handleCheckList()}/>

      <button type="button" onClick={handleSave}>
        Save
      </button>
      
    </form>
  );
};
