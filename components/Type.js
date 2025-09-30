import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = ({data,loop,delay=50,speed=250,style=''}) => {
  return (
    <div className={`${style}`}>
      <Typewriter
        options={{
          strings: data,
          autoStart: true,
          loop: loop,
          delay: delay,
          cursor: '|',
          deleteSpeed: speed,
        }}
      />
    </div>
  );
};

export default Type;
