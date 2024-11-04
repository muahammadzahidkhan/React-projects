import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}
            method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' id='khan' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email */}
            <div className='mt-4 space-y-2'>
              <span>Email:</span>
              <br />
              <input type="email" placeholder='Enter your email ' className='border outline-none py-1 px-3 w-80 rounded-md' {...register("email", { required: true })} />
            </div>
            {errors.email && <span className='text-red-700 text-sm'>This field is required</span>}

            {/* password */}
            <div className='mt-4 space-y-2'>
              <span>Password:</span>
              <br />
              <input type="password" placeholder='Enter your password ' className='border outline-none py-1 px-3 w-80 rounded-md'
              {...register("password", { required: true })} />
            </div>
            {errors.password && <span className='text-red-700 text-sm'>This field is required</span>}

            {/* button */}
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
              <p>Not registered? <Link to="/signup" className='underline text-blue-600 cursor-pointer'>Signup</Link></p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Login