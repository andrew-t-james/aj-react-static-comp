import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = (props) => {
  const { storiesTitle, stories } = props;

  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          stories.map((story, index) => {
            // INSTEAD OF returning the div below, return a Story component
            // Be sure to pass down the correct props!
            return (
            <Story
              key={index}
              story={story} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Stories;
