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
  
`

export const ContainerTask = styled.div`


`

export const ContainerListTask = styled.div`
  width: 46rem;
  padding: 16px 0;

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

export const ListTaskWithTasks = styled.div`

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
    max-width: 632px;
    color: var(--gray-100);
    font-weight: 400;
  }

`