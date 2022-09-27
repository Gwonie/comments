import { useEffect, useRef, useState } from "react";
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

function CreateComments({ comments, setComments }) {
  // 작성자, 댓글내용 상태
  const [input, setInput] = useState({
    writer: "",
    contents: "",
  });
  const { writer, contents } = { ...input };

  // input값 핸들러
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("댓글입력창 렌더");
  });

  // 댓글 새로운 id값 관리
  let nextId = useRef(4);

  // 댓글 추가 기능
  const handleClickSubmit = () => {
    // 댓글 데이터 추가
    setComments([
      ...comments,
      {
        id: nextId.current,
        writer: writer,
        contents: contents,
        isLike: false,
      },
    ]);

    // input값 초기화
    setInput({ writer: "", contents: "" });

    // id값 + 1
    nextId.current += 1;
  };

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="작성자"
        onChange={handleChangeInput}
        name="writer"
        value={writer}
      />
      <BottomContents>
        <textarea
          placeholder="댓글내용"
          onChange={handleChangeInput}
          name="contents"
          value={contents}
        />
        <button onClick={handleClickSubmit}>등록</button>
      </BottomContents>
    </Wrapper>
  );
}

export default CreateComments;
