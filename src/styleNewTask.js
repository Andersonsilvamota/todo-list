import styled from "styled-components";


export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.375rem;
  margin-top: calc(0px - 1.3rem - 6px);
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