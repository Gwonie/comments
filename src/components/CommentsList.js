import styled from "styled-components";
import { useEffect } from "react";
import Comment from "./Comment";

const TopWapper = styled.div`
  margin-top: 1rem;
`;

function CommentsList({ comments, setComments }) {
  return (
    <TopWapper>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            setComments={setComments}
          />
        );
      })}
    </TopWapper>
  );
}

export default CommentsList;
