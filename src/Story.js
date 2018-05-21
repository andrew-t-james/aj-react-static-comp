import React from 'react';
import Button from './Button';
import Author from './Author';
import './Story.css';

const Story = (props) => {
  const { img, authImg, estTime, authName, desc, title } = props.story;

  return (
    <div className='Story'>
      <img src={`public/${img}`} />
      <div className='story-info'>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <Author
          authImg={authImg}
          estTime={estTime}
          authName={authName}/>
      </div>
    </div>
  );
};

export default Story;
