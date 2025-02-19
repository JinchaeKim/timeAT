import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";

const Form = () => {
  const { input, setInput } = useContext(TodoContext);

  const addNewTodo = (e) => {
    e.preventDefault();

    const newInput = { ...input, id: Date.now() };
    const newArray = [...todos, newInput];

    setTodos(newArray);
    // setInput(defaultTodo);
  };
  console.log("input", input);
  return (
    <StyledForm onSubmit={addNewTodo}>
      <StyledInput
        type="text"
        name="title"
        placeholder="할 일 제목을 입력하세요"
        value={input.title}
        onChange={(e) => {
          setInput({ ...input, title: e.target.value });
        }}
      />
      <StyledInput
        type="text"
        name="content"
        placeholder="할 일 내용을 입력하세요"
        value={input.content}
        onChange={(e) => {
          setInput({ ...input, content: e.target.value });
        }}
      />
      <StyledButton type="submit">추가</StyledButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
