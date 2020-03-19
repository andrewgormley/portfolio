import React from 'react';
import { motion } from 'framer-motion'

// components
import CaseStudiesRow from '../components/CaseStudiesRow'

function CaseStudies() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>

      <CaseStudiesRow/>

    </motion.div>
  );
}

export default CaseStudies;
