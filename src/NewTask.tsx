import React from "react";
import { Button, Container, ContainerInput, ContainerListTask, ContainerTask, ListTask, NewTaskInput, TaskInfo } from "./styleNewTask";
import {PlusCircle, ClipboardText} from 'phosphor-react'

export function NewTask(){
  return(
    <Container>
      <ContainerInput>
        <NewTaskInput type="text" placeholder="Adicione uma nova tarefa"/>
        <Button>
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
          <ListTask>
            <ClipboardText size={80} color='var(--gray-400)' weight="light"/>
            <p className="text-bold">Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize itens a fazer</p>
          </ListTask>
        </ContainerListTask>
    </ContainerTask>
  </Container>
  )
}