import React, {useState} from "react";

export const tasks = [
    {
        id: "1",
        name: "IETI-01",
        description: "prueba1",
        assignedTo: "Verbo Camacho",
        dueDate: "26/10/2021",
        status: "TODO",
        isCompleted: false,
    },
    {
        id: "2",
        name: "IETI-02",
        description: "Prueba 2",
        assignedTo: "Allan Weisnner",
        dueDate: "26/10/2021",
        status: "TODO",
        isCompleted: false,
    }
];

const Data = {tasks};

const DataContext = React.createContext(Data);
export const Prueba = ({prueba0}) => {
    const [data, setData] = useState(Data);
    const value = {data, setData};
    return <DataContext.Provider value={value}>{prueba0}</DataContext.Provider>;
};


export const useData = () => {

    return React.useContext(Data);
};