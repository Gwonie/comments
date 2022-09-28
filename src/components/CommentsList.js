import styled from "styled-components";
import { useEffect } from "react";
import Comment from "./Comment";

const TopWapper = styled.div`
  margin-top: 1rem;
`;

function CommentsList({ comments, setComments }) {
  useEffect(() => {
    console.log("댓글리스트 렌더");
  });
  return (
    <TopWapper>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            comments={comments}
            setComments={setComments}
          />
        );
      })}
    </TopWapper>
  );
}

export default CommentsList;
