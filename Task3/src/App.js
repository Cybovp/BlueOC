import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './slices/postSlice';
import { openPopup } from './slices/popupSlice';
import PostForm from './components/PostForm/PostForm';
import PostContent from './components/PostContent/PostContent';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 5;

  const isShowPopup = useSelector((state) => state.popup.showPopup);

  const AddPostBtnClick = () => {
    dispatch(openPopup());
  }

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') 
  {
    content = <p>Loading...</p>;
  } 
  else if (postStatus === 'succeeded') 
  {
    content = posts.toSorted((a,b) => b.id - a.id).map((post) => (
      <PostContent content={post} />
    ));
  } 
  else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className="App">
      {isShowPopup && (
        <section className="postFormSection">
          <PostForm />
        </section>
      )}
      
      <section className='headerSection'>
        <h1>Posts</h1>
        <button className='addPostBtn' onClick={AddPostBtnClick}><span className="plusIcon">+</span>  Add Post</button>
      </section>
      <section className="postSection">
        {content}
      </section>
    </div>
  );
}

export default App;
