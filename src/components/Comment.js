import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

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

function Comment({ comment, setComments }) {
  const { id, writer, contents, like } = { ...comment };
  const [editContents, setEditContents] = useState(contents);

  // 좋아요 기능
  const [islike, setIsLike] = useState(like);
  const [isEdit, setIsEdit] = useState(false);
  const onToggleLike = () => {
    setIsLike(!islike);
  };

  // 수정토글
  const onToggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // 수정완료
  const handleClickDone = (commentId) => {
    setComments((comments) =>
      comments.map((it) =>
        it.id === commentId ? { ...it, contents: editContents } : it
      )
    );
    onToggleIsEdit();
  };

  // 수정취소
  const handleClickUndone = () => {
    setEditContents(contents);
    onToggleIsEdit();
  };

  // 댓글 삭제
  const onRemove = (commentId) => {
    setComments((comments) => comments.filter((it) => it.id !== commentId));
  };

  return (
    <Wrapper>
      {id}
      <Contents>
        <h3>{writer}</h3>
        {isEdit ? (
          <input
            type="text"
            value={editContents}
            onChange={(e) => {
              setEditContents(e.target.value);
            }}
          />
        ) : (
          <p>{contents}</p>
        )}
      </Contents>
      <Buttons>
        <FontAwesomeIcon
          icon={faHeart}
          className={islike ? "like active" : "like"}
          onClick={onToggleLike}
        />
        <div>
          {isEdit ? (
            <>
              <button onClick={() => handleClickDone(id)}>수정완료</button>
              <button onClick={handleClickUndone}>수정취소</button>
            </>
          ) : (
            <>
              <button onClick={onToggleIsEdit}>수정</button>
              <button onClick={() => onRemove(id)}>삭제</button>
            </>
          )}
        </div>
      </Buttons>
    </Wrapper>
  );
}

export default Comment;
