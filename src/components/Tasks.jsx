import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){

    const navigate = useNavigate()

    function onDetailsClick(task){

        const query = new URLSearchParams()
        query.set("title",task.title)
        query.set("description",task.description)

        console.log(query.toString())

        navigate(`/task?${query.toString()}`)

    }


    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {
            tasks.map((task) =>(

                <li key={task.id} className="flex  gap-2">

                <button
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
                    task.IsCompleted && "line-through"
                    }`}
                >
                            {task.title}
                </button>
                <button 
                    onClick={()=>onDetailsClick(task)}
                    className="bg-slate-400 p-2 rounded-md text-white"
                >
                    <ChevronRightIcon/>
                </button>

                <button 
                    onClick={()=>onDeleteTaskClick(task.id)}
                    className="bg-slate-400 p-2 rounded-md text-white text-red-400"
                >
                    <TrashIcon/>
                </button>

                </li>



            ))
        }
        
       </ul>
    );


}

export default Tasks;