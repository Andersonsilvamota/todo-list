import React from "react";
import { Button, ContainerInput, NewTaskInput } from "./styleNewTask";
import {PlusCircle} from 'phosphor-react'

export function NewTask(){
  return(
    <ContainerInput>
      <NewTaskInput type="text" placeholder="Adicione uma nova tarefa"/>
      <Button>
        Criar
        <PlusCircle size={30}/>
      </Button>
    </ContainerInput>
  )
}