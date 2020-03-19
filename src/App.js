import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

// css
import './assets/css/default.min.css';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies'
import Crowdcube from './pages/casestudies/Crowdcube'
import Sweatshop from './pages/casestudies/Sweatshop'
import Ldn from './pages/casestudies/Ldn'

function App() {
  return (
    <Router>
      <div className="container">

        <Nav />

        <AnimatePresence>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/casestudies' component={CaseStudies} />
            <Route exact path='/about' component={About} />
            <Route exact path='/casestudies/crowdcube' component={Crowdcube} />
            <Route exact path='/casestudies/sweatshop' component={Sweatshop} />
            <Route exact path='/casestudies/ldn19' component={Ldn} />
          </Switch>
        </AnimatePresence>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
