import React from 'react';
import Typewriter from 'typewriter-effect';
import illustration from '../assets/img/header-illustration.png';

function Banner() {
  return (

    <div className="banner">
      <h1>
        <Typewriter
          options={{ cursor: '_', delay: 100 }}
          onInit={(typewriter) => {
            typewriter.typeString('designer and<br/>builder of<br/>interfaces').start();
          }}
        />
      </h1>

      <div className="illustration d-none d-lg-block">
        <img src={illustration} alt="illustration of robots"/>
      </div>
    </div>

  );
}

export default Banner;
