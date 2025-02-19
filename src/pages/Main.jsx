import styled from "styled-components";
import Form from "../components/Form";
import List from "../components/List";
import { useState } from "react";

const MainPage = () => {
  const defaultTodo = {
    id: 1,
    title: "",
    content: "",
    isDone: false,
  };
  const [input, setInput] = useState(defaultTodo);
  const [todos, setTodos] = useState([]);

  const addNewTodo = (e) => {
    e.preventDefault();

    const newInput = { ...input, id: Date.now() };
    const newArray = [...todos, newInput];

    setTodos(newArray);
    // setInput(defaultTodo);
  };
  return (
    <StContainer>
      <StHeader>
        <h1>내일배움캠프 스탠다드반 투두리스트</h1>
      </StHeader>
      <StMain>
        <Form addNewTodo={addNewTodo} input={input} setInput={setInput} />
        <List todos={todos} setTodos={setTodos} setInput={setInput} />
      </StMain>
      <StFooter>
        <p>Copyright 2025 스파르타 내일배움캠프</p>
      </StFooter>
    </StContainer>
  );
};

export default MainPage;

const StContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const StHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const StMain = styled.main`
  padding: 20px;
`;

const StFooter = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
`;
