import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height:auto;
  margin-top: calc(0px - 1.3rem - 6px);
  padding-bottom: 66px;
`

export const NewTaskInput = styled.input`
  border: 1px solid var(--gray-700);
  background-color: var(--gray-500);
  width: 39.87rem;
  height: 3.375rem;
  border-radius: 8px;
  padding: 20px;
  color: var(--gray-200);
`
    
export const Button = styled.button`
  width: 5.625rem;
  height: 3.25rem;
  background-color: var(--blue-dark);
  padding: 16px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  color: var(--gray-100);
  cursor: pointer;

  &:hover {
    background-color: var(--blue);
  }

`

export const ContainerTask = styled.div`

`

export const ContainerListTask = styled.div`
  width: 46rem;
  padding: 0;
  
  ul{
    list-style: none;
    padding: 0;

    .completed strong{
      text-decoration: line-through;
      color: var(--gray-300);
    } 
  }
`

export const TaskInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  
  .task-created{
    color: var(--blue);
  }

  .task-concluded{
    color: var(--purple);
  }

  strong {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
  strong > div {
    background-color: var(--gray-400);
    padding: 4px 12px;
    border-radius: 999px;
  }
`

export const ListTask = styled.div`
  border-top: 2px solid var(--gray-400);
  padding: 64px 6px 6px 6px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  .text-bold {
    font-weight: 700;
  }
  
  p {
    color: var(--gray-300);
    font-weight: 400;
  }
`

export const ListTaskWithTasks = styled.li`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 12px;
  background-color: var(--gray-500);

  strong {
    width: 632px;
    padding: 6px;
    max-width: 632px;
    color: var(--gray-100);
    font-weight: 400;
  }

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 14px;
    margin-bottom: 18px;
  }

  .check {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .check:checked {
    
    &:hover {
      background-color: var(--purple-dark);   
      border: 2px solid var(--purple-dark);
    }

    & ~ .checkmark {
      background-color: var(--purple);
      border: 2px solid var(--purple);
    }
    
    & ~ .checkmark:after {
      display: block;
    } 
    strong{
      text-decoration: line-through;
      color: var(--gray-300);
  } 
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 999px ;
    border: 2px solid var(--blue-dark);

    &:hover {
      background-color: var(--gray-400);
      border: 2px solid var(--blue);
    }

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 6px;
      top: 3px;
      width: 3px;
      height: 6px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`

export const ButtonDelete = styled.button`
  border-radius: 4px;
  background-color: transparent;
  color: var(--gray-300);

  &:hover {
    color: var(--danger);
    background-color: var(--gray-400);
    cursor: pointer;
  }
`