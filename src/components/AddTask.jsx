import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTaskClick}){

    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

    function resetField(){

        setTitle("")
        setDescription("")

    }

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type="text" 
                placeholder="Degite o titulo da tarefa"
            />
            <Input 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                type="text" 
                placeholder="Degite a descrição da tarefa"
            />
            <button
                onClick={()=>{

                    onAddTaskClick(title,description)
                    resetField();
                    
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >
                Adicionar
            </button>
        </div>
    );

}

export default AddTask