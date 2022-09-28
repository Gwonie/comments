import styled from "styled-components";
import { useEffect } from "react";
import Comment from "./Comment";

const TopWapper = styled.div`
  margin-top: 1rem;
  height: 80%;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  border-bottom: 2px solid gray;
  height: 9%;
`;

const Comments = styled.div`
  height: 91%;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:nth-last-child(1) {
    margin-bottom: 0.5rem;
  }
`;

function CommentsList({ comments, setComments }) {
  useEffect(() => {
    console.log("댓글리스트 렌더");
  });
  return (
    <TopWapper>
      <Title>
        <h1>댓글</h1>
      </Title>
      <Comments>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              setComments={setComments}
            />
          );
        })}
      </Comments>
    </TopWapper>
  );
}

export default CommentsList;
