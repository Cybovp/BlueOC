import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../slices/postSlice';
import { closePopup } from '../../slices/popupSlice';
import "./PostForm.css"

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(addPost({ title, body }));
      setTitle('');
      setBody('');
      dispatch(closePopup());
    }
  };

  const onClosePopUpClicked = () => {
    dispatch(closePopup());
  }

  return (
    <section className="PostForm">
      <button className="closeBtn" onClick={onClosePopUpClicked}>X</button>
      <h2>Add New Post</h2>
      <form className="postForm">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="titleInput"
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onBodyChanged}
          className="contentInput"
        />
        <button className="savePostBtn" type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default PostForm;