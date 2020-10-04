/* eslint-disable import/first */
import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// import Home from "./Home.js"
// import routes from "routes.js";
// import HeaderHome from './../../component/header/homeHeader/HomeHeader.js'
import { Carousel, Row, Col, NavItem, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { String } from './../../common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPhone, faFax, faGraduationCap, faSchool, faRss } from '@fortawesome/free-solid-svg-icons'

import Circle from './../../assets/icon/circle.svg'
import api from "./../../api/api";
import {Engineer} from "./../../models/engineer";
import {Observable, of, Subject} from "rxjs";
import {catchError, take} from "rxjs/operators";
import Axios from  './../../api';
// Import Swiper React components
import moment from 'moment';
import momentJalli from 'moment-jalaali';
import Slider from "react-slick";
import Home from  './../../assets/icon/home.svg'
var s=require("moment/locale/fa")  ;

const instance = Axios.create({
  baseURL: 'https://jsonplaceholders.typicode.com'
});
 interface ICard {
  name: string;
  image: string;
  id: number;
}
    const cards = [
  {
    name: "a",
    image: Home,
    id: 1,
  },
  {
    name: "b",
    image: Home,
    id: 2,
  },
  {
    name: "c",
    image: Home,
    id: 3,
  },
];
export const Main = () => {

// moment.locale("fa", s);
// moment.loadPersian();
    const getEngineers = () =>{
         instance.get('/posts').subscribe(
         response => console.log(response),
         error => console.log(error)
      );
    }
    const [active, setActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [activeRight, setActiveRight] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // let items = [{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGT6L8t2__ZvRbhrydP5-R--G2rwYf8PogSA&usqp=CAU' }, { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGT6L8t2__ZvRbhrydP5-R--G2rwYf8PogSA&usqp=CAU'}]
    // let items = [{ src: SlideFive }, { src: SlideFour }, { src: two }]

    useEffect(() => {
        // const interval = setInterval(() => {
        //     if (activeIndex == (items.length - 1)) {
        //         goToIndex(activeIndex - 1)
        //     } else {
        //         goToIndex(activeIndex + 1)
        //     }
        // }, 1000);
        // return () => clearInterval(interval);
    }, []);
   
    var settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  centerMode: false,
  centerPadding: "0px",
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
};
const renderCards = () => {
  return cards.map(card => {
    return <div className="plate-card">
                    <h3>{card.id}</h3>
                  </div>;
  });
};

const renderBottomNavigation = () => {
    return(
  <div className="home-page-footer">
  <table>
  <tr>
{  cards.map(card => {
    return (<td>
<div style={{
width: 10,
    height: 20}}>
    <img src={card.image} className="img-bottom-bar"alt="A Rectangle Image with SVG" />
  
</div><span>خانه</span>
</td>)
  })
}

 
</tr>
</table>
  </div>)

};
    return (
      <>
        <div className="content">
        <div className="top-oval"/>
          <div className="box">
         <div className="row mr-top-20">
          
          <div className="col-4">
               <div className="header-side align-left"><span>{momentJalli().format('hh:ss')}</span><span> {momentJalli().format('dddd')} </span><span>{momentJalli().format('jYYYY.jM.jD')}</span></div>
          </div>
      <div className="col-4">
               <div className="header-side align-center"> خانه </div>
          </div>
           <div className="col-4">
             {/* <div className="header-side"> ورود </div>*/}
          </div>
         
         </div>
            <div className="row lheader">
              <header>
                
                <Slider {...settings} className="center">
                     {renderCards()}

           
                  
                 
                </Slider>
              </header>
            </div>
            <div className="row lcontent">
              <div className="auth-content-box"></div>
            </div>
            <div  className="row lfooter">
            <footer>
            {renderBottomNavigation()}
            </footer>
            </div>
          
          </div>
        </div>
      </>
    );

}

export default Main;
