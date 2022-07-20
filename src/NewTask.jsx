import React, {useState} from "react";
import { Button, Container, ContainerInput, ContainerListTask, ContainerTask, ListTask, NewTaskInput, TaskInfo, ListTaskWithTasks, ButtonDelete } from "./styleNewTask";
import {PlusCircle, ClipboardText, Trash } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';


export function NewTask(){
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  function handleAddNewTask(event){
    event.preventDefault()
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(){
    const taskNew = {
      'id': uuidv4(),
      'title': newTask,
      'isComplete': false
    }

    setTasks([...tasks, taskNew])
    setNewTask('')
  }

  function handleDeleteTask(id){
    let newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  function handleCompleteTask(id){
    //console.log(task)

    const taskCompleted = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task )
    console.log(taskCompleted)

    setTasks(taskCompleted)
  }

  
  return(
    
    <Container>
      <ContainerInput>
        <NewTaskInput 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={(e) => setNewTask(e.target.value)} 
          value={newTask}
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
          <strong className="task-created">Tarefas criadas <div>{tasks.length}</div></strong>
          <strong className="task-concluded">Concluídas <div>{count} de {tasks.length}</div></strong>
        </TaskInfo>
        <ContainerListTask>
          <ul>
          {tasks.length > 0 ? (
            tasks.map(task => {
                return (
                  <ListTaskWithTasks className={task.isComplete ? 'completed' : ''} key={task.id}>
                    <label className="checkbox-container">
                      <input 
                        readOnly 
                        className="check" 
                        checked={task.isComplete} 
                        type="checkbox" 
                        onClick={() => handleCompleteTask(task.id)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <strong>{task.title}</strong>
                    <ButtonDelete>
                      <Trash onClick={() => handleDeleteTask(task.id)} size={24}  />
                    </ButtonDelete>
                  </ListTaskWithTasks>
                )
              })
          ) : ''}
          </ul>
            {/* {tasks.length > 0 ? (
              tasks.map(task => {
                return (
                  <ListTaskWithTasks key={task.id}>
                    <input readOnly className="check" checked={task.isComplete} type="checkbox" onClick={() => handleCompleteTask(task.id)}/>
                    <span className="checkmark"></span>
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
          } */}

        </ContainerListTask>
    </ContainerTask>
  </Container>
  )
}