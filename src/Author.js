// Create an Author component
import React from 'react';
import './Author.css';

const Author = (props) => {
  const { authImg, authName, estTime } = props;

  return (
    <div className='author-info'>
      <img src={`public/${authImg}`} className='author-image ' />
      <div className="author-text">
        <h4>{authName} </h4>
        <h4>{estTime} read</h4>
      </div>
    </div>
  );
};

export default Author;
