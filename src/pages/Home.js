import React from 'react';
import { motion } from 'framer-motion'

// components
import Banner from '../components/Banner';
import Tools from '../components/Tools';
import CaseStudiesRow from '../components/CaseStudiesRow';

function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>

      <Banner />
      <Tools />
      <CaseStudiesRow />

    </motion.div>
  );
}

export default Home;
