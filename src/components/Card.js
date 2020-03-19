import React from 'react';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';

function CaseStudies(props) {
  return (

    <div className="col-sm-12 col-md-4 my-3">
      <Link to={'/casestudies/' + props.title}>
        <Tilt className="Tilt" options={{ max : 15, scale: 1.05 }} style={{ height: '100%', width: '100%' }} >
          <div className="Tilt-inner case-study-card">
            <div className="case-study-card-copy">
              <h4>{props.title}</h4>
              <div className="tag">{props.tag}</div>
            </div>
            <img src={props.image} alt={props.alt}/>
          </div>
        </Tilt>
      </Link>
    </div>

  );
}

export default CaseStudies;
