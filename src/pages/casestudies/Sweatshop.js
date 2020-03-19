import React from 'react'
import { motion } from 'framer-motion'

import SweatshopLogo from '../../assets/img/casestudies/sweatshop/sweatshop-logo.png'
import Branding from '../../assets/img/casestudies/sweatshop/branding.jpg'
import LiveHomepage from '../../assets/img/casestudies/sweatshop/live-homepage.jpg'
import LiveListPage from '../../assets/img/casestudies/sweatshop/live-list-page.jpg'
import LiveProductPage from '../../assets/img/casestudies/sweatshop/live-product-page.jpg'
import OldHomepage from '../../assets/img/casestudies/sweatshop/old-homepage.jpg'
import Wireframes from '../../assets/img/casestudies/sweatshop/wireframes.jpg'

function Sweatshop() {

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>

      <div className="row case-study">

        <div className="col-sm-12 my-2 my-lg-5 case-study-header case-study-copy pb-5">
          <div className="avatar-container">
            <img src={SweatshopLogo} alt="Sweatshop Logo"/>
          </div>
          <div className="case-study-header-copy">
            <h2>Sweatshop</h2>
            <p>Sweatshop is an award winning running retailer founded in 1971 by Chris Brasher, Olympic gold medalist and co-creator of the London Marathon.</p>
          </div>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>The Problem</h3>
          <p>
            I few years prior to my involvement with the project, Sweatshop was acquired by SportsDirect. Unfortunately in the years that followed other sites took priority and Sweatshop was left to slowly become obsolete. However Sweatshop still had a loyal customer base that has been a part of the Sweatshop journey for decades, therefore my team and I were brought on to breathe some life into their business and push Sweatshop up to modern ecommerce standards. This would involve everything from social strategy, branding and their website.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={OldHomepage} alt="The old homepage design"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Limitations</h3>
          <p>
            The main issue we immediately noticed was the lack of buy in from stakeholders when it came to utilising development resources. Dev time was scarce and we had to justify decisions against other business needs. With most projects the stakeholders want results yesterday and with Sweatshop this was no different, with only a few weeks to analyse the current platform and propose a new design the pressure was definitely on.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={Branding} alt="Initial branding work"/>
          <p>Initial branding work</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>The Solution</h3>
          <p>
            Due to the developer constraints we decided we had to as little with functionality as possible and concentrate heavily on making big wins within the design, we solved this by reducing the number of images to declutter the site and go bigger with the images we had to give it an up to date modern feel. We also changed the site to full width for most users which gave the design a more immersive feel, this added with the larger images really changed the whole look of the site.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={Wireframes} alt="Wireframed concepts"/>
          <p>Wireframed concepts</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Project Goals</h3>
          <p>
            With ecommerce websites there are always a few key goals that you need to hit and some key parts of the user journey that require serious attention. Add to basket and each point through the checkout process is absolutely key, giving the site a facelift may have been a goal for the stakeholders but for our team we really wanted to make the site work more fluently for the users, therefore we set ourselves internal KPIs around conversion and drop-off.
          </p>
          <p>
            Although we improved on metrics such as exit and bounce rate I was most proud of our work done to the purchase journey. As a result of our changes we upped the conversion rate from 2.55% to 3.34%. We reduced payment drop-off to 7% from 10% and our biggest difference was the confirmation drop-off which we reduced by 12% which was quite high at 38%.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={LiveHomepage} alt="The new live homepage"/>
          <p>The new live homepage</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>My Role</h3>
          <p>
            I was the project lead on this project working internally with our UI/UX Designer, Product Manager and also our Brand Designer. We also worked closely with the Sweatshop team and their internal developers. This project had no real brief before beginning so a large part of my role was getting buy in from all stakeholders and executing on our vision.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={LiveListPage} alt="The new live list page"/>
          <p>The new live list page</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Learned Lessons</h3>
          <p>
            My main take away from this project was really focusing on our development resources and adapting to making the biggest changes that took as little resource as possible, a lot of this was achieved via manipulating the design and part of it was selling the idea of versioning, the idea of making small incremental changes between other projects got a lot of small functionality changes through that otherwise would have been pushed aside.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={LiveProductPage} alt="The live product page"/>
          <p>The live product page</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Conclusion</h3>
          <p>
            Overall I am pretty happy with where this project is, the current version is not the finished article but with each small iteration it’s getting there. The underlying UX work that was put in at the start made for a very smooth design process and we made sure we had the data to back up our design choices.
          </p>
          <p style={{textAlign:"center"}}>
            Andrew Gormley - Head of UX<br/>
            Freddie Loveday - UI Designer<br/>
            Greg Musser - Product Manager<br/>
            Gareth Sanger - Brand Designer
          </p>
        </div>

      </div>

    </motion.div>
  );
}

export default Sweatshop;
