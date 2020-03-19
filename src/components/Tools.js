import React from 'react';
import { motion } from 'framer-motion';

import framer from '../assets/img/logos/framer.png';
import balsamiq from '../assets/img/logos/balsamiq.png';
import github from '../assets/img/logos/github.png';
import invision from '../assets/img/logos/invision.png';
import react from '../assets/img/logos/react.png';
import sass from '../assets/img/logos/sass.png';
import sketch from '../assets/img/logos/sketch.png';
import photoshop from '../assets/img/logos/photoshop.png';

function Tools() {
  return (

    <div className="row my-2 my-md-5">
      <div className="col-sm-12 tools">
        <a href="https://www.photoshop.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={photoshop}/></a>
        <a href="https://www.framer.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={framer}/></a>
        <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={sketch}/></a>
        <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={balsamiq}/></a>
        <a href="https://www.invisionapp.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={invision}/></a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={react}/></a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={sass}/></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{y: -5, transition: { duration: .3 },}} src={github}/></a>
      </div>
    </div>

  );
}

export default Tools;
