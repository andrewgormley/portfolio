import React from 'react'
import { motion } from 'framer-motion'

import LdnLogo from '../../assets/img/casestudies/ldn19/ldn19-logo.png'
import ImageOne from '../../assets/img/casestudies/ldn19/1.jpg'
import ImageTwo from '../../assets/img/casestudies/ldn19/2.jpg'
import ImageThree from '../../assets/img/casestudies/ldn19/3.jpg'
import ImageFour from '../../assets/img/casestudies/ldn19/4.jpg'
import ImageFive from '../../assets/img/casestudies/ldn19/5.jpg'

function Ldn() {

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>

      <div className="row case-study">

        <div className="col-sm-12 my-2 my-lg-5 case-study-header case-study-copy pb-5">
          <div className="avatar-container">
            <img src={LdnLogo} alt="Crowdcube Logo"/>
          </div>
          <div className="case-study-header-copy">
            <h2>ldn19</h2>
            <p>Winner in the BT Retail Week Tech & Ecomm Awards. Interactive features that display on 32 inch 4K touch screens. Featuring interaction design, and web development.</p>
          </div>
        </div>

        <div className="col-sm-12 my-2 my-lg-5">
          <div className="aspect-ratio">
            <iframe src="https://www.youtube.com/embed/SWWrd4M6SGA" frameBorder="0" allowFullScreen=""></iframe>
          </div>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>The Goal</h3>
          <p>
            The LDN19 store was built with one purpose - To revolutionize soccer retail. A small team varying in specialities was put together to turn this into reality. As the design lead on this project my purpose was to engage and interact with a range of different customers through nine 32” 4K touch displays located throughout the store.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={ImageOne} alt="Pantofola d'Oro - Interactive feature"/>
          <p>Pantofola d&#39;Oro - Interactive feature</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Limitations</h3>
          <p>
            I rarely had development resources at my disposal which meant that I was acting as an end to end product designer. From concept to production ready features. Another limitation was keeping the content original, whenever a new soccer product was to be released it required a feature to be built by myself. This required a lot of creativity and collaboration between videographers, photographers and the brands themselves.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={ImageTwo} alt="Łukasz Fabiański - Interactive feature"/>
          <p>Łukasz Fabiański - Interactive feature</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>The Build</h3>
          <p>
            This project posed different challenges from the usual web builds. Even though it was one big web application, the viewport never changed size and touch gestures were the only way to navigate and interact with content. HTML and CSS were my main tools to get the basic functionality and aesthetics of the pages, through directly watching our users we quickly found the most engaging content utilised animations and interactive content.
          </p>
          <p>
            To tackle this issue I took advantage of existing libraries such as Animate.CSS and WOW.js for the animations and a basic understanding of JavaScript to allow for functions on click (or touch in this case). The content was the most important thing therefore it was key to not overdo the bells and whistles on each feature.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={ImageThree} alt="Łukasz Fabiański - Interacting with his live feature"/>
          <p>Łukasz Fabiański - Interacting with his live feature</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>My Role</h3>
          <p>
            This project brought out the inner maverick within me. It was up to me to maintain timelines and hit deadlines by not only creating content but pushing for sign off from both Marketing and the Brands such as Nike, adidas, PUMA and Under Armour to name a few. It was also extremely important to liaise with the Video department to make sure our content aligned since their work could also be seen throughout the store. It was the impact of both video and interactive content that truly made LDN19 a digital experience.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={ImageFour} alt="Łukasz Fabiański - Interacting with his live feature"/>
          <p>Łukasz Fabiański - Interacting with his live feature</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Learned Lessons</h3>
          <p>
            Libraries can be a lifesaver, although they can be restrictive at times they can also keep you and check. Knowing that a feature would need custom code can be the decision between implementing it or axing it. For the months I was tasked with this projects I was glad I made the decision to include these libraries early.
          </p>
          <p>
            Another lesson learned was to not waste time with poor content. LDN19 sold a range of products from various brands, it was clear which brands for the most engaging just from the assets received from them. After trying over and over again I made the decision to use a standard presentation for less engaging content which gave me more time to focus on the products that were making a real impact.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={ImageFive} alt="Customer interacting with the display"/>
          <p>Customer interacting with the display</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Conclusion</h3>
          <p>
            Not only did the LDN19 store win and get shortlisted for several awards. The store hosted and still host a range of top flight athletes and legends of the game. Seeing these superstars just as engaged with the experience as our customers is an achievement in itself. The LDN19 store is taking the right steps to revolutionize retail and has truly set the stage for their largest audience, social media, most significantly Instagram with over 425,000 followers.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5">
          <div className="aspect-ratio">
            <iframe src="https://www.youtube.com/embed/smCkZ14BtZU" frameBorder="0" allowFullScreen=""></iframe>
          </div>
        </div>

      </div>

    </motion.div>
  );
}

export default Ldn;
