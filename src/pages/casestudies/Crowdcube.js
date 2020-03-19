import React from 'react'
import { motion } from 'framer-motion'

import CrowdcubeLogo from '../../assets/img/casestudies/crowdcube/crowdcube-logo.png'
import ConceptHomepage from '../../assets/img/casestudies/crowdcube/concept-homepage.jpg'
import Data from '../../assets/img/casestudies/crowdcube/data.jpg'
import NewHomepage from '../../assets/img/casestudies/crowdcube/new-homepage.jpg'
import OldHomepage from '../../assets/img/casestudies/crowdcube/old-homepage.jpg'
import Whiteboard from '../../assets/img/casestudies/crowdcube/whiteboard-wireframes.jpg'
import DesignTeam from '../../assets/img/casestudies/crowdcube/design-team.jpg'

function Crowdcube() {

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>

      <div className="row case-study">

        <div className="col-sm-12 my-2 my-lg-5 case-study-header case-study-copy pb-5">
          <div className="avatar-container">
            <img src={CrowdcubeLogo} alt="Crowdcube Logo"/>
          </div>
          <div className="case-study-header-copy">
            <h2>crowdcube</h2>
            <p>Award winning FinTech startup. Website redesign, new product releases and style guide creation. Featuring UI design, web development and prototyping.</p>
          </div>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>The Problem</h3>
          <p>
            I was brought into the Crowdcube team to help push for more design focused thinking and to work with the current design team to give the website and product a much needed visual update. The goal was to improve on the aesthetics of the site without damaging and if possible improving on certain key statistics such as increasing sign up rates and increasing visibility on all investment opportunities.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={OldHomepage} alt="The old homepage design"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Limitations</h3>
          <p>
            What I did not expect was the sheer amount of technical debt that already existed within the product, this issue was exacerbated by Front-End being limited on time since the already small team were tied into other deadlines and commitments. The other issue was that Front-End were having to create a lot of custom code constantly, this was was taking up a large chunk of their time.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={ConceptHomepage} alt="Initial concept for the homepage"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>The Solution</h3>
          <p>
            Due to the our resource and time constraints we decided to make the visual changes a very gradual project. This involved lot’s of small releases but done quickly. And for the larger changes using split tests against the originals to ensure our users engagement was not affected. To help combat the amount of customs code the Front-End team were churning out we decided to work on a component library which would allow them to reuse elements across the site, this was time consuming to set up as expected but we quickly started seeing the benefits.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={Whiteboard} alt="Whiteboard session with Product Manager"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Project Goals</h3>
          <p>
            A lot of the site has and is still undergoing this visual update therefore I will just focus on the homepage for this case study. There were 2 goals we had for this project: make the page more aesthetically pleasing and reduce the amount of unnecessary information. Although this project was further down the roadmap it was something I was keen to attack as soon as possible, therefore I started collecting data from Google Analytics and meeting with our Data Analyst to get insight on what elements were being engaged with and what was a waste of real estate. I then created a quick concept design on the side to spark interest and conversations with stakeholders. Although I knew aspects of the concept would not make it into the project it was the best way to get people excited about the prospect of a new homepage.
          </p>
          <p>
            Once a plan of attack and brief had been created with product I went about creating a new version of the homepage which was to be tested against the existing homepage. The new version proved to be a success by positively affecting our primary goal of increasing sign ups, going from 1.38% to 2.92%. It also achieved it’s goal of not damaging other metrics but also improved on those metrics. Click throughs to ‘Investment Opportunities’ was increased from 43.73% to 51.81% and bounce rate was decreased from 30.22% to 27.51% which are both major achievements. This data allowed us to justify pushing all traffic to the new design.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={NewHomepage} alt="The improved homepage design"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>My Role</h3>
          <p>
            For this project my role was truly varied. I initiated the project by working with the data team to gather the current statistics. I pushed for removing elements from the homepage which was backed by the data. From here I sketched, wireframed and prototyped until the Product team and I were happy with the visual. Then worked with Front-End to create the page by developing a lot of the CSS and responsive behaviour, this took a lot of coordination when it came to merging branches and approving pull requests on GitHub.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={Data} alt="A few key metrics from our testing phase"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Learned Lessons</h3>
          <p>
            I learned a few things from this project and reinforced existing practise methods. Firstly to get reliable results from split testing, you have to use a larger percentage of traffic. Stakeholders were hesitant to send so much traffic to the new page to begin with, this delayed getting the results we needed and therefore held the end result up. Part way through the test I was fortunate enough to grab @multimichel for a chat at Generate Conference, Michel was a speaker at the conference and is a designer at Booking.com and he reinforced my point about traffic levels in AB testing.
          </p>
          <p>
            I knew backing up designs and briefs with data was important but this project really strengthened that fact. Some of the stakeholders involved with the project had been with the company for a while and were therefore very hard to convince on changes. Having data to back us up every step of the way was an important method to protect ourselves from being directed by the HiPPO, otherwise known as the ‘highest paid person&#39;s opinion’.
          </p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-image">
          <img src={DesignTeam} alt="The Crowdcube team collaborating on eachothers designs"/>
          <p>The old homepage design.</p>
        </div>

        <div className="col-sm-12 my-2 my-lg-5 case-study-copy">
          <h3>Conclusion</h3>
          <p>
            In conclusion, the project is in a much better place now after a bit of a face lift and dealing with the legacy information and code. However I will always try and improve on the page and will hopefully implement changes to the page and run little experiments on the side. Metrics can always improve!
          </p>
          <p style={{textAlign:"center"}}>
            Andrew Gormley - Lead UI Designer<br/>
            Jazz Austin - Product Manager<br/>
            Jamie Reynolds - Front End Developer
          </p>
        </div>

      </div>

    </motion.div>
  );
}

export default Crowdcube;
