import React from 'react'

const Appointment = () => {
  return (
    <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px]  text-center'>
        Get an appointment
      </h3>
      <div className='w-[54px] h-[3px] mx-auto bg-white my-6'></div>
      <div className='space-y-[24px]'>
        <input className='form-control' type='text' placeholder='Full name' />
        <input
          className='form-control'
          type='text'
          placeholder='Phone number'
        />
        <input
          className='form-control'
          type='email'
          placeholder='Email address'
        />
        <textarea
          className='resize-none w-full h-[132px] ouline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary'
          placeholder='Your message'
        ></textarea>
        <button className='btn bg-primary hover:bg-primary-hover transition-all'>
          Send message
        </button>
      </div>
    </div>
  )
}

export default Appointment
