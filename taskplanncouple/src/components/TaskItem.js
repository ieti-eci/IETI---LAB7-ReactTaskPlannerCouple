import {useHistory} from "react-router";

export const TaskItem = ({id, name, description, assignedTo, dueDate, status, isChecked, taskName, onTaskChange}) => {
    const history = useHistory();

    

    return (
        <div>
            <Body sx={{maxWidth: 800, marginLeft: 40, marginTop: 5}} id={id}>
                
                    <input >
                        {name}
                    </input>
                    <input >
                        {assignedTo}
                    </input>
                    <input >
                        {status}
                    </input>
                    <input >
                        {dueDate}
                    </input>
                    <input >
                        {description}
                    </input>
                    <Checkbox
                        defaultChecked
                        checked={isChecked}
                        onChange={onTaskChange}
                    />
                    <button variant="contained"   size="small">
                        Edit
                    </button>
                
            </Body>
            <br/>
        </div>
    );
};
