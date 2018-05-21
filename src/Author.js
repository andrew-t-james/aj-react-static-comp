// Create an Author component
import React from 'react';
import './Author.css';

const Author = (props) => {
  return (
    <div className='author-info'>
      <img src={`public/${props.authImg}`} className='author-image ' />
      <div className="author-info-text">
        <h4 className="author-text">{props.authName} </h4>
        <h4 className="author-text">{props.estTime} read</h4>
      </div>
    </div>
  );
};

export default Author;
