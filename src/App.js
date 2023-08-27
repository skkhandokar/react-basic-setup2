/* eslint-disable max-lines */
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    useRouteMatch
   } from "react-router-dom";


import Nomatch  from './componants/Nomatch/Nomatch';


const App = () => {
    return (
       
        <div >
   

        <Router>

          <Switch>
              
              
          <Route  path='*'>
              <Nomatch></Nomatch>
            </Route>
            
         </Switch>
        </Router>

        </div>      
    );
};
// eslint-disable-next-line max-lines

export default App;
