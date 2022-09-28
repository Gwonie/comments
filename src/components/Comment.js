import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  min-height: 4.5rem;
  margin-top: 0.5rem;
  border: 2px solid lightgray;
  display: flex;
  justify-content: space-between;
  padding: 0.6em;
`;

const Contents = styled.div`
  width: 80%;
`;

const Buttons = styled.div`
  width: 20%;
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

const Content = styled.div`
  width: 100%;
  min-height: 2rem;
  margin-top: 0.3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  textarea {
    width: 100%;
    height: 3rem;
    padding: 0.3em;
    resize: none;
  }
`;

const EditButtons = styled.div`
  display: flex;
  justify-content: flex-end;
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

  useEffect(() => {
    console.log("각각 렌더");
  });

  return (
    <Wrapper>
      <Contents>
        <h5>{writer}</h5>
        <Content>
          {isEdit ? (
            <textarea
              value={editContents}
              onChange={(e) => {
                setEditContents(e.target.value);
              }}
            />
          ) : (
            <p>{contents}</p>
          )}
        </Content>
      </Contents>
      <Buttons>
        <FontAwesomeIcon
          icon={faHeart}
          className={islike ? "like active" : "like"}
          onClick={onToggleLike}
        />
        <EditButtons>
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
        </EditButtons>
      </Buttons>
    </Wrapper>
  );
}

export default Comment;
