import React, {useState} from "react";
import { Button, Container, ContainerInput, ContainerListTask, ContainerTask, ListTask, NewTaskInput, TaskInfo, ListTaskWithTasks, ButtonDelete } from "./styleNewTask";
import {PlusCircle, ClipboardText, Trash } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';


export function NewTask(){
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddNewTask(event){
    event.preventDefault()
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(){
    setTasks([...tasks, 
      {
      'id': uuidv4(),
      'title': newTask,
      'isComplete': false
      }
    ])
  }

  function handleDeleteTask(id){
    let newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
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
            {tasks.length > 0 ? (
              tasks.map(task => {
                return (
                  <ListTaskWithTasks key={task.id}>
                    <input type="checkbox"/>
                    <strong>{task.title}</strong>
                    <ButtonDelete>
                      <Trash onClick={() => handleDeleteTask(task.id)} size={24}  />
                    </ButtonDelete>
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