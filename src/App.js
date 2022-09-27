import styled from "styled-components";
import "./App.css";
import CommentsList from "./components/CommentsList";
import CreateComments from "./components/CreateComments";

const Wrapper = styled.div`
  width: 768px;
  height: calc(768px * 0.9);
  margin: 0 auto;
  margin-top: calc(768px * 0.1);
  border: 1px solid black;
  border-radius: 20px;
  padding: 1.5rem;
`;

function App() {
  return (
    <Wrapper>
      <CreateComments />
      <CommentsList />
    </Wrapper>
  );
}

export default App;
