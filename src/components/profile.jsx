import { motion } from 'framer-motion';
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa/index.js';

export const Profile = () => {
  return (
    <section id='profile'>
      {/* <!-- Profile Container --> */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className='flex flex-col mx-auto items-center justify-center space-y-3 pt-20'>
          {/* <!-- Profile Pic --> */}

          <img
            src='images/profile-pic.jpg'
            alt='profile picture'
            className='h-48 w-48 border-2 rounded-full border-indigo-400 object-cover'
          />

          {/* <!-- Tag --> */}
          <h2 className='text-white text-2xl'>@calicolive</h2>
          {/* <!-- Bio --> */}
          <p className='text-sm text-indigo-200 w-48 text-center'>
            Sound Designer | Developer
          </p>

          {/* <!-- Socials --> */}
          <div className='flex space-x-4 mx-auto justify-evenly'>
            {/* <!-- Youtube --> */}
            <a href='https://youtube.com/@calicolive'>
              <FaYoutube className='text-white h-6 w-6 hover:text-indigo-400 hover:scale-110' />
            </a>
            {/* <!-- Instagram --> */}
            <a href='https://instagram.com/calicolive'>
              <FaInstagram className='text-white h-6 w-6 hover:text-indigo-400 hover:scale-110' />
            </a>
            {/* <!-- Tik Tok --> */}
            <a href='https://tiktok.com/@calicolive'>
              <FaTiktok className='text-white h-6 w-6 hover:text-indigo-400 hover:scale-110' />
            </a>
            {/* Email */}
            <a href='mailto:calicodeep@gmail.com'>
              <FaEnvelope className='text-white h-6 w-6 hover:text-indigo-400 hover:scale-110' />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
