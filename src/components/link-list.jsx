import { freeInstruments, resources } from './links';
import { motion } from 'framer-motion';

export const LinkList = () => {
  return (
    <section id='instruments'>
      <div className='flex flex-col mx-auto items-center justify-center p-8'>
        <h3 className='text-white text-md font-semibold'>
          Free Instruments & Samples
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <div className='flex flex-col space-y-4 mt-4'>
            <ul className='space-y-4'>
              {freeInstruments.map((link) => {
                const { id, title, url } = link;
                return (
                  <li
                    key={id}
                    className='text-white- text-xs bg-indigo-500 rounded-lg p-4 w-80 text-center shadow-lg hover:scale-110 md:w-96'>
                    <a href={url}>
                      <h2 className='text-white text-lg'>{title}</h2>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className='flex flex-col mx-auto items-center justify-center p-8'>
        <h3 className='text-white text-md font-semibold'>Free Resources</h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}>
          <div className='flex flex-col space-y-4 mt-4'>
            <ul className='space-y-4'>
              {resources.map((link) => {
                const { id, title, url } = link;
                return (
                  <li
                    key={id}
                    className='text-white- text-xs bg-indigo-500 rounded-lg p-4 w-80 text-center shadow-lg hover:scale-110  md:w-96'>
                    <a href={url}>
                      <h2 className='text-white text-lg'>{title}</h2>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
