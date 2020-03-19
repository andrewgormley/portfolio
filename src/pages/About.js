import React from 'react'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

function About() {

  const codeString = "const experience = [\
    \n   {\
    \n      title: 'Head of UX',\
    \n      companyName: 'DINK',\
    \n      companyType: ['Agency', 'Startup'],\
    \n      isRemote: true,\
    \n      yearsEmployed: 2\
    \n   },\
    \n   {\
    \n      title: 'Lead UI Designer',\
    \n      companyName: 'Crowdcube',\
    \n      companyType: ['Financial Tech', 'Startup']\
    \n      isRemote: true,\
    \n      yearsEmployed: 2\
    \n   },\
    \n   {\
    \n      title: 'Designer / Developer',\
    \n      companyName: 'Pro:Direct Sport',\
    \n      companyType: ['Ecommerce'],\
    \n      isRemote: false,\
    \n      yearsEmployed: 3\
    \n   },\
    \n   {\
    \n      title: 'Freelance Designer',\
    \n      companyName: '',\
    \n      companyType: ['Side Hustle'],\
    \n      isRemote: true,\
    \n      yearsEmployed: 10\
    \n   }\
    \n]";

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>
      <div className="row">

        <div className="col-sm-12 col-lg-6 about my-5 pr-5">

          <p className="mt-5">Hey, I&#39;m Andrew Gormley <span role="img" aria-label="hand waving" data-tip data-for='hand waving'>👋</span><br/></p>
          <p>I&#39;m a UI / UX Designer and part time Web Developer. My job is to make awesome experiences</p>
          <p>I&#39;ve been lucky enough to work with some amazing companies ranging from an award winning Financial Tech startup to ecommerce businesses with hundreds of millions in both revenue and traffic and with that experience I have gained an extremely wide range of skills in design, UX and development.</p>
          <p>Outside of work I like to spend my time...</p>

          <ul>
            <li><span role="img" aria-label="travelling" data-tip data-for='island'>🏝</span> Travelling to hot places</li>
            <li><span role="img" aria-label="playing sports" data-tip data-for='rugby ball'>🏉</span> Playing rugby</li>
            <li><span role="img" aria-label="controller" data-tip data-for='controller'>🎮</span> Gaming - currently Anno and Apex</li>
            <li><span role="img" aria-label="starting side projects" data-tip data-for='laptop'>💻</span> Starting side projects</li>
            <li><span role="img" aria-label="not finishing side projects" data-tip data-for='prohibited'>🚫</span> Not finishing side projects</li>
          </ul>

          <p>
          To get in contact with me click the button below, alternatively email me at
          <a href="mailto:andrewgormley91@gmail.com" target="_top">andrewgormley91@gmail.com</a>
          </p>
          <a href="https://forms.gle/2vijvjoAkVmAEcix5" target="_blank" rel="noopener noreferrer">
            <button className="my-2">contact me</button>
          </a>

        </div>

        <div className="col-sm-12 col-lg-6 my-5">
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {codeString}
          </SyntaxHighlighter>
        </div>

      </div>

    </motion.div>
  );
}

export default About;
