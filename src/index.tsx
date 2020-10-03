/* eslint-disable import/first */
import * as React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink,} from "react-router-dom";
import Main from "./layouts/main/Main.js";


import './styles/scss/main.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './styles/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPhone, faFax, faGraduationCap, faSchool, faRss } from '@fortawesome/free-solid-svg-icons'
import avacell from './assets/img/avacell5.jpg'
import routes from "./routes";
import {Header} from './component/header/Header'

const hist = createBrowserHistory();

import logo from './assets/img/avcell-logo.png'


import 'swiper/swiper.scss';

function RouteWithSubRoutes(route:any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
ReactDOM.render(
  <Router>
    <div className="wrapper ms-overlay no-fixing">
     <div className="bg-triangles rtl" > 
      {/* <Header/> */}


 <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />

      ))
      }
      <Redirect from="/" to="/home" />
    </Switch> 


        
        </div>
        </div>

  </Router>,
  document.getElementById("root")
);
