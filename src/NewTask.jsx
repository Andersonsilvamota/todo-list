import React, {useState} from "react";
import { Button, Container, ContainerInput, ContainerListTask, ContainerTask, ListTask, NewTaskInput, TaskInfo, ListTaskWithTasks } from "./styleNewTask";
import {PlusCircle, ClipboardText, Trash } from 'phosphor-react'

export function NewTask(){
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddNewTask(event){
    event.preventDefault()
    setNewTask(event.target.value)
    console.log(event.target.value)
  }

  function handleCreateNewTask(){
    setTasks([...tasks, newTask])
  }

  return(
    <Container>
      <ContainerInput>
        <NewTaskInput 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={handleAddNewTask}
           
        />
          
        <Button 
          type='submit'
          onClick={handleCreateNewTask}
        >
          Criar
          <PlusCircle size={30}/>
        </Button>

        
      </ContainerInput>
      <ContainerTask>
        <TaskInfo>
          <strong className="task-created">Tarefas criadas <div>0</div></strong>
          <strong className="task-concluded">Concluídas <div>0</div></strong>
        </TaskInfo>
        <ContainerListTask>
            {tasks.lenght !== 0 ? (
              tasks.map(task => {
                return (
                  <ListTaskWithTasks>
                    <input type="checkbox"/>
                    <strong>{task}</strong>
                    <Trash size={24} color='var(--gray-300)' />
                  </ListTaskWithTasks>
                )
              })
            ) : (
                
                <ListTask>
                  <ClipboardText size={80} color='var(--gray-400)' weight="light"/>
                  <p className="text-bold">Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize itens a fazer</p>
                </ListTask>
                  
            )
          }

        </ContainerListTask>
    </ContainerTask>
  </Container>
  )
}