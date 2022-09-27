import styled from "styled-components";

const Wrapper = styled.div``;

function CreateComments() {
  return (
    <Wrapper>
      <input type="text" placeholder="작성자" />
      <div>
        <textarea placeholder="댓글내용" />
        <button>등록</button>
      </div>
    </Wrapper>
  );
}

export default CreateComments;
