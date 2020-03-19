import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image from '../assets/img/profile.jpg'

function Nav() {

  return (

    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>

      <nav>
        <ul>

          <li style={{marginLeft: "0"}} className="d-none d-md-block">
            <span>>_</span>
          </li>

          <Link to="/portfolio/">
            <motion.li whileHover={{y: -5, transition: { duration: .3 },}}>
              andrewGormley
            </motion.li>
          </Link>

          <Link to="/portfolio/casestudies">
            <motion.li whileHover={{y: -5, transition: { duration: .3 },}}>
              caseStudies
            </motion.li>
          </Link>

          <Link to="/portfolio/about">
            <motion.li whileHover={{y: -5, transition: { duration: .3 },}} style={{marginRight: "0px"}}>
              about
            </motion.li>
          </Link>

          <Link to="/portfolio/about">
            <motion.li whileHover={{y: -5, transition: { duration: .3 },}} style={{float: "right", marginTop: "-5px"}} className="d-none d-md-block">
              <div className="avatar-emblem">
                <img src={image} alt="andrew gormley profile"/>
              </div>
            </motion.li>
          </Link>

          <a href="https://github.com/andrewgormley/" target="_blank" rel="noopener noreferrer">
            <motion.li whileHover={{y: -5, transition: { duration: .3 },}} style={{float: "right", marginTop: "-5px"}} className="d-none d-md-block">
              <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </motion.li>
          </a>

          <a href="https://dribbble.com/AndrewGormley" target="_blank" rel="noopener noreferrer">
            <motion.li whileHover={{y: -5, transition: { duration: .3 },}} style={{float: "right", marginTop: "-5px"}} className="d-none d-md-block">
              <svg height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z" fill="#444"/>
              </svg>
            </motion.li>
          </a>

        </ul>


      </nav>

    </motion.div>

  );
}

export default Nav;
