import { useHistory } from "react-router";

export const TaskItem = ({ id, isChecked, taskName, onTaskChange }) => {
  const history = useHistory();

  const styleOfTheComponent = {
    textDecoration: isChecked ? "line-through" : "",
  };

  const handleClick = () => {
    const url = `/tasks/${id}`;
    history.push(url);
  };

  return (
    <li>
      <input onChange={onTaskChange} className="CheckBox"checked={isChecked} type="checkbox" />
      <span style={styleOfTheComponent} className='Text'>{taskName}</span>
      <button class="button" onClick={handleClick}>Edit</button>
    </li>
  );
};
