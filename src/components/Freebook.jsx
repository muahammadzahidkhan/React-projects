import React, { useState,useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import list from "../../public/List.json"
import axios from 'axios';
import Cards from './Cards';

function Freebook() {

  const [book,setbook]=useState([])
  useEffect(() => {
    const getbook =async()=>{
      try {
       const res= await axios.get("http://localhost:4000/book")
        console.log(res.data);
        setbook(res.data.filter((data)=>data.category==="free"));
      } catch (error) {
        console.log(error);
      }
    }
    getbook();
  }, []);

//  const filterdata = list.filter((data)=>data.category==="free");
//  console.log(filterdata);

 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
 
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa, assumenda libero culpa unde pariatur quidem distinctio architecto iure aspern.</p>
        </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>{
          return  <Cards item={item} key={item.id}/>
        })}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
