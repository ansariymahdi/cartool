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
import Slide from './../../assets/img/slide1.jpg'
import avacell from './../../assets/img/avacell4.png'
import Slidetwo from './../../assets/img/slide2.jpg'
import SlideFour from './../../assets/img/slide4.png'
import SlideFive from './../../assets/img/slide5.jpg'
import two from './../../assets/img/1920x1080/02.jpg'
import Circle from './../../assets/icon/circle.svg'
import api from "./../../api/api";
import {Engineer} from "./../../models/engineer";
import {Observable, of, Subject} from "rxjs";
import {catchError, take} from "rxjs/operators";
import Axios from  './../../api';
// Import Swiper React components


import Slider from "react-slick";

// Swiper.use([Thumbs]);
var ps;


const instance = Axios.create({
  baseURL: 'https://jsonplaceholders.typicode.com'
});
export const Main = () => {


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
    let items = [{ src: SlideFive }, { src: SlideFour }, { src: two }]

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
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
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
    return (
      <>
        <div className="content">
          <div className="box">
            <div className="row lheader">
              <header>
                <div className="auth-title"> ورود </div>
                <div className="auth-desc"> ایزی پی، هوشمند و آسان </div>
                <Slider {...settings} className="center">
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
              </header>
            </div>
            <div className="row lcontent">
              <div className="auth-content-box"></div>
            </div>
          </div>
        </div>
      </>
    );

}

export default Main;
