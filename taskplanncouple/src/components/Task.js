import {useState} from "react";
import {useHistory, useParams} from "react-router";
import {useData} from "../pruebas";

export const TaskForm = () => {

    const history = useHistory();
    const {data, setData} = useData();
    const {taskId} = useParams();
    const task = data.tasks.find((task) => task.id === taskId);
    const [text, setText] = useState(task?.name ?? "");
    const [stateValue, setStateValue] = useState(task?.status ?? "");

    if (!task) {
        return <div>Task not found</div>;
    }

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleStateChange = (event) => {
        if (event.target.value === "DONE") {
            setCompleted(true)
        } else {
            setCompleted(false)
        }
        setStateValue(event.target.value);
    };


    

    return (
        <div>
            <div className='title-header'>
                <h1>Task Planner</h1>
            </div>
            <br/>
            <br/>
            <div className='form-group'>
                <form onSubmit={handleSave}>
                    
                        <TextField
                            id="outlined-textarea"
                            value={text}
                            label="Task Name"
                            placeholder="name"
                            size="small"
                            multiline
                        />
                        <FormControl sx={{m: 1, minWidth: 204}} size="small">
                            <InputLabel id="demo--autowidth-label">State</InputLabel>
                            <Select
                                labelId="demoautowidth-label"
                                id="demo-select-autowidth"
                                defaultValue={"DONE"}
                                value={stateValue}
                                autoWidth
                                label="TODO"
                            >
                                <MenuItem value={"TODO"}>TODO</MenuItem>
                                <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                                <MenuItem value={"REVIEW"}>REVIEW</MenuItem>
                                <MenuItem value={"DONE"}>DONE</MenuItem>
                            </Select>
                        </FormControl>
                    
                    <br/>
                    
                        <TextField
                            id="outlined-textarea"
                            value={assignedValue}
                            label="Assigned To"
                            placeholder="assigned"
                            size="small"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            value={dueDateValue}
                            label="Due Date"
                            placeholder="date"
                            size="small"
                            multiline
                        />
                    
                    <br/>
                    
                        <TextField
                            id="outlined-textarea"
                            value={descriptionValue}
                            label="Task Description"
                            placeholder="description"
                            size="small"
                            multiline
                            sx={{minWidth: 422}}
                        />
                    
                    <br/>
                    
                        <button   >
                            Save
                        </button>
                    
                </form>
            </div>
        </div>
    );
};
