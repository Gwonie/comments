import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import CommentsList from "./components/CommentsList";
import CreateComments from "./components/CreateComments";

const Wrapper = styled.div`
  width: 375px;
  height: 667px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 2px solid gray;
  border-radius: 20px;
  padding: 1rem;
`;
const data = [
  {
    id: 1,
    writer: "김뫄뫄",
    contents: `html 짱짱맨!!`,
    like: true,
  },
  {
    id: 2,
    writer: "박솨솨",
    contents: `css 짱짱맨!!`,
    like: false,
  },
  {
    id: 3,
    writer: "이야야",
    contents: `Javascript 짱짱맨!!`,
    like: false,
  },
];

function App() {
  const [comments, setComments] = useState(data);
  return (
    <Wrapper>
      <CreateComments setComments={setComments} />
      <CommentsList comments={comments} setComments={setComments} />
    </Wrapper>
  );
}

export default App;
