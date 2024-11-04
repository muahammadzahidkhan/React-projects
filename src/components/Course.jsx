import React, { useState,useEffect } from 'react'
// import list from '../../public/List.json'
import Cards from './Cards'
import {Link} from 'react-router-dom';
import axios from "axios";



function Course() {
  const [book,setbook]=useState([])
  useEffect(() => {
    const getbook =async()=>{
      try {
       const res= await axios.get("http://localhost:4000/book")
        console.log(res.data);
        setbook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getbook();
  }, []);
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>HERE! :)</span></h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum est ipsam amet neque quis ut nulla porro, dignissimos reiciendis dolore autem beatae consectetur, natus unde ullam. Quia, nihil explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => {
              return <Cards key={item.id} item={item} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Course