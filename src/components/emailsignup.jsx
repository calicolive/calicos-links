import React from 'react';
import { motion } from 'framer-motion';

export const EmailSignUp = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <form
          method='post'
          action='https://sendfox.com/form/m55qjz/3zp87w'
          className='sendfox-form flex flex-col items-center justify-center space-y-4'
          id='3zp87w'
          data-async='true'
          data-recaptcha='false'>
          <p>
            <p className='text-white text-md font-semibold p-4'>
              Get all my free instruments directly to your inbox!
            </p>
            <input
              type='email'
              id='sendfox_form_email'
              placeholder='Email'
              name='email'
              required
              className='border rounded px-4 py-2 mr-4 w-96 text-black'
            />
          </p>
          {/* no botz please */}
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden='true'>
            <input
              type='text'
              name='a_password'
              tabIndex='-1'
              value=''
              autoComplete='off'
            />
          </div>
          <p className=''>
            <button
              type='submit'
              className='bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-sm hover:scale-110'>
              Sign Up
            </button>
          </p>
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSignUp;
