import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 100%;
  input {
    width: 30%;
  }
`;

const BottomContents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  textarea {
    width: 70%;
  }
`;

function CreateComments() {
  // 작성자, 댓글내용 상태
  const [input, setInput] = useState({
    writer: "",
    contents: "",
  });
  const { writer, contents } = { ...input };

  // input값 핸들러
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("댓글입력창 렌더");
  });

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="작성자"
        onChange={handleInputChange}
        name="writer"
        value={writer}
      />
      <BottomContents>
        <textarea
          placeholder="댓글내용"
          onChange={handleInputChange}
          name="contents"
          value={contents}
        />
        <button>등록</button>
      </BottomContents>
    </Wrapper>
  );
}

export default CreateComments;
