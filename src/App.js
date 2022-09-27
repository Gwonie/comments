import { useState } from "react";
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
const data = [
  {
    id: 1,
    writer: "김뫄뫄",
    contents: `html 짱짱맨!!`,
    isLike: false,
  },
  {
    id: 2,
    writer: "박솨솨",
    contents: `css 짱짱맨!!`,
    isLike: false,
  },
  {
    id: 3,
    writer: "이야야",
    contents: `Javascript 짱짱맨!!`,
    isLike: false,
  },
];

function App() {
  const [comments, setComments] = useState(data);
  return (
    <Wrapper>
      <CreateComments comments={comments} setComments={setComments} />
      <CommentsList comments={comments} />
    </Wrapper>
  );
}

export default App;
