import React from 'react';
import EditIcon from '../icons/EditIcon';
import CommentContainer from '../../containers/CommentContainer';

const CardInfo = (props) => {
  const renderComments = () => {
    return props.cardComments.map((comment) => {
      return (
        <CommentContainer
          commentText={comment.text}
          isCommentActive={comment.isCommentActive}
          commentId={comment.commentId}
          colId={props.colId}
          cardId={props.cardId}
          comId={comment.comId}
          key={comment.key}
          authorName={props.authorName}
        />
      );
    });
  };
  return (
    <>
      <div className="card-info">
        <div className="test" onClick={props.toggleCardInfoWindow} />
        <div
          className="card-info__wrap"
          id="card-info__wrap"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.keyCode === 27) props.showCardInfo();
          }}
        >
          <header className="card-info__header">
            <span className="card-info__close" onClick={props.toggleCardInfoWindow}>
              &times;
            </span>
            {!props.isCardActive ? (
              <input
                type="text"
                className="todo-card__input"
                defaultValue={props.cardTitle}
                onChange={props.editCardTitle}
                onBlur={() => setTimeout(props.insertCardTitle, 200)}
                placeholder="Enter a title for this card..."
                autoFocus={true}
                onKeyPress={(e) => {
                  if (e.keyCode === 13) {
                    props.insertCardTitle();
                  }
                }}
              />
            ) : (
              <div className="card-info__title">
                <div className="card-info__title-wrap">
                  <h3 onClick={props.insertCardTitle}>{props.cardTitle} </h3>
                  <span className="card-info__subtitle">
                    In list: <span className="card-info__list-title">{props.colTitle}</span>
                  </span>
                  <span className="card-info__author">
                    Author: <span className="card-info__author-name"> {props.authorName}</span>
                  </span>
                </div>
                <span className="edit-icon info" onClick={props.insertCardTitle}>
                  <EditIcon />
                </span>
              </div>
            )}
          </header>
          <div className="card-info__descr">
            <h3 className="card-info__descr-title">Description:</h3>
            <p className="card-info__descr-text">{props.cardDescr}</p>
            {props.haveDescr ? (
              <div className="card-info__icons">
                <span className="edit-icon descr" onClick={props.editDescription}>
                  <EditIcon />
                </span>
                <span className="delete-icon" onClick={props.deleteDescription}>
                  &times;
                </span>
              </div>
            ) : (
              <div>
                <textarea
                  ref={props.descrInputRef}
                  name="description"
                  rows="3"
                  className="card-info__input-text"
                >
                  {props.cardDescr}
                </textarea>
                <button className="add-btn" onClick={props.addDescription}>
                  Add description
                </button>
              </div>
            )}
          </div>
          <div className="card-info__comments">
            <div className="card-info__comments-container">
              <h3 className="card-info__comments-title">Comments:</h3>
              {renderComments()}
            </div>
            <div className="card-info__comments-items">
              {props.isCommentAdded ? (
                <button className="add-btn" onClick={props.addComment}>
                  Add comment
                </button>
              ) : (
                <button className="add-btn">Add comment</button>
              )}
            </div>
          </div>
          <button className="delete-btn" onClick={props.deleteCard}>
            Delete card...
          </button>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
