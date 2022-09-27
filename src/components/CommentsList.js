import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TopWapper = styled.div`
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  margin-top: 0.5rem;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Contents = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  .like {
    color: lightgray;
  }
  .active {
    color: tomato;
  }
`;

const comments = [
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

function Comment({ comment }) {
  const { writer, contents, isLike } = { ...comment };
  return (
    <Wrapper>
      <Contents>
        <h3>{writer}</h3>
        <p>{contents}</p>
        {/* <input type="text" value={contents} /> */}
      </Contents>
      <Buttons>
        <FontAwesomeIcon
          icon={faHeart}
          className={isLike ? "like active" : "like"}
        />
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </Buttons>
    </Wrapper>
  );
}

function CommentsList() {
  return (
    <TopWapper>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </TopWapper>
  );
}

export default CommentsList;
