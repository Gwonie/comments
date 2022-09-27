import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

function Comment({ comment }) {
  const { id, writer, contents, like } = { ...comment };

  const [islike, setIsLike] = useState(like);

  const onToggle = () => {
    setIsLike(!islike);
  };
  return (
    <Wrapper>
      {id}
      <Contents>
        <h3>{writer}</h3>
        <p>{contents}</p>
        {/* <input type="text" value={contents} /> */}
      </Contents>
      <Buttons>
        <FontAwesomeIcon
          icon={faHeart}
          className={islike ? "like active" : "like"}
          onClick={onToggle}
        />
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </Buttons>
    </Wrapper>
  );
}

function CommentsList({ comments }) {
  return (
    <TopWapper>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </TopWapper>
  );
}

export default CommentsList;
