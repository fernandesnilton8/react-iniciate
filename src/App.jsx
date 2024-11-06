import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { v4 as uuidv4 } from 'uuid';
import HeaderTitle from "./components/HeaderTitle";


function App() {

  const [tasks, setTasks] = useState(
    //carregar dados de armazenado no localStorage, senão tiver retornar vaziu
    JSON.parse(localStorage.getItem("tasks") || [])
  )

  //efeito utilizado quando algo muda
  useEffect(()=>{
    //colocar dados no localStorage sempre k task muda
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  //efeito utilizado uma unica vez quando acessar API parm []
  useEffect(()=>{
    //buscar dados fazendo chamada de API

    const fetchTask = async () =>{

      //chamar API
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method:"GET"
        }
    );

    //pegar dados
    const data = await response.json()

    console.log(data)

    }
    
    fetchTask()

  },[])


  function onTaskClick(taskId){

    //percore list de task
    const newTasks= tasks.map((task)=>{

      //verefica sih taskId igual 
      if(task.id == taskId){
        //returno com Isconplete diferente
        return {...task, IsCompleted: !task.IsCompleted}
      }

      return task;        

    })

    setTasks(newTasks)


  }

  function onDeleteTaskClick(taskId){

    //lista de task filtrado com id diferente de taskId
    const filterTasks= tasks.filter(task => task.id != taskId)

    setTasks(filterTasks)


  }

  function onAddTaskClick(title,description){

    if(!title.trim() || !description.trim()){
      return alert("Preenche todos os campos")
    }    

    //nova task com title e description 
    const nawTask = {
      id: uuidv4(),// Gera um ID único
      title,
      description,
      status: "Not Start",
      IsCompleted: false
    }

    setTasks([...tasks, nawTask])

  }

  return (
   
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <HeaderTitle >Gerenciador de tarefas</HeaderTitle>
          <AddTask
            onAddTaskClick={onAddTaskClick}
          />
          <Tasks 
            tasks={tasks} 
            onTaskClick={onTaskClick} 
            onDeleteTaskClick={onDeleteTaskClick}            
          />
        </div>        

      </div>
        
  )
}

export default App
