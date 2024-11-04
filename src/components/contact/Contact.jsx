import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from "react-hook-form"


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex items-center h-screen justify-center'>
      <div className='w-[600px]' >
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Contract Us</h3>
          {/* name */}
          <div className='mt-4 space-y-2'>
            <span>Name:</span>
            <br />
            <input type="text" placeholder='Enter your Fullname ' className='border outline-none py-1 px-3 w-full rounded-md' {...register("name", { required: true })} />
          </div>
          {errors.name && <span className='text-red-700 text-sm'>This field is required</span>}

          {/* email */}
          <div className='mt-4 space-y-2'>
            <span>Email:</span>
            <br />
            <input type="email" placeholder='Enter your email ' className='border outline-none py-1 px-3 w-full rounded-md'{...register("email", { required: true })} />
          </div>
          {errors.email && <span className='text-red-700 text-sm'>This field is required</span>}

          {/* password */}
          <div className='mt-4 space-y-2'>
            <span>Message:</span>
            <br />
            <textarea type="comments" placeholder='Type your Message ' className='border outline-none py-1 px-3 w-full rounded-md'{...register("password", { required: true })}></textarea> 
          </div>
          {errors.password && <span className='text-red-700 text-sm'>This field is required</span>}

          {/* button */}
          <div className=' mt-4'>
            <button className='bg-blue-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
          </div>
          </form >
        </div>
      </div>
    </div>
  )
}

export default Contact