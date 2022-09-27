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
  return (
    <Wrapper>
      <input type="text" placeholder="작성자" />
      <BottomContents>
        <textarea placeholder="댓글내용" />
        <button>등록</button>
      </BottomContents>
    </Wrapper>
  );
}

export default CreateComments;
