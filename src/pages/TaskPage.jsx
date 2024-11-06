import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"
import HeaderTitle from "../components/HeaderTitle";

function TaskPage(){

    const navigate = useNavigate()

    const [queryParmas] = useSearchParams();

    //pagar valor de param
    const title = queryParmas.get("title")
    const description = queryParmas.get("description")

    return(
       
            <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
                <div className="w-[500px] mx-auto space-y-4">
                    <div className="flex justify-center relative mb-6">
                        <button
                             onClick={()=>navigate(-1)}
                             className="absolute left-0 top-0 bottom-0 text-slate-100"
                        >
                            <ChevronLeftIcon/>
                        </button>
                        <HeaderTitle >Detalhe tarefa</HeaderTitle>
                    </div>
                    
                    <div className="bg-slate-200 p-4 rounded-md">
                        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                        <p className="text-slate-600">{description}</p>
                    </div>
                    
                </div>        

            </div>
    )
}

export default TaskPage