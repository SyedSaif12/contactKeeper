import React, { Fragment } from 'react'
import './App.css';
import Navbar from './Components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';



function App() {
  return (
    <Router>
      <Fragment>
      
     
            <Navbar />
            <div className='conatiner'>
              <Switch>

                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                

                </Switch>


            </div>
   
        
        </Fragment>

    </Router>

  );
}

export default App;
