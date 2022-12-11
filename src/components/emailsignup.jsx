import React from 'react';
import { motion } from 'framer-motion';

export const EmailSignUp = () => {
  return (
    <section className='mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <form
          method='post'
          action='https://sendfox.com/form/1v9746/1yngyo'
          className='sendfox-form flex flex-col items-center justify-center space-y-4'
          id='1yngyo'
          data-async='true'
          data-recaptcha='false'>
          <p className='text-md p-4 text-center font-semibold text-white'>
            Get all my free instruments directly to your inbox!
          </p>
          <input
            type='email'
            id='sendfox_form_email'
            placeholder='Email'
            name='email'
            required
            className='mx-auto w-96 rounded border py-2 pl-4 text-black'
          />

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
          <p>
            <button
              type='submit'
              className='rounded-lg bg-indigo-500 px-4 py-2 text-white shadow-sm hover:scale-110'>
              Sign Up
            </button>
          </p>
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSignUp;
