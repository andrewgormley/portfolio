import React from 'react';

import crowdcube from '../assets/img/casestudies/crowdcube/crowdcube-cover.jpg';
import sweatshop from '../assets/img/casestudies/sweatshop/sweatshop-cover.gif';
import ldn19 from '../assets/img/casestudies/ldn19/ldn19-cover.jpg';

import Card from './Card';

function CaseStudiesRow() {
  return (

    <div className="row my-5">

      <Card
        title={'crowdcube'}
        tag={'fintech'}
        image={crowdcube}
        alt={'crowdcube'}
      />


      <Card
        title={'sweatshop'}
        tag={'ecommerce'}
        image={sweatshop}
        alt={'sweatshop'}
      />

      <Card
        title={'ldn19'}
        tag={'retail'}
        image={ldn19}
        alt={'ldn19'}
      />

    </div>

  );
}

export default CaseStudiesRow;
