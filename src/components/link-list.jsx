import { freeInstruments, resources } from './links';
import { motion } from 'framer-motion';

export const LinkList = () => {
  return (
    <section id='instruments'>
      <div className='mx-auto flex flex-col items-center justify-center p-8'>
        <h3 className='text-md font-semibold text-white'>
          Free Instruments & Samples
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='mt-4 flex flex-col space-y-4'>
            <ul className='space-y-4'>
              {freeInstruments.map((link) => {
                const { id, title, url } = link;
                return (
                  <li
                    key={id}
                    className='text-white- w-80 rounded-lg bg-indigo-500 p-4 text-center text-xs shadow-lg hover:scale-110 md:w-96'>
                    <a href={url}>
                      <h2 className='text-lg text-white'>{title}</h2>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className='mx-auto flex flex-col items-center justify-center p-8'>
        <h3 className='text-md font-semibold text-white'>Free Resources</h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='mt-4 flex flex-col space-y-4'>
            <ul className='space-y-4'>
              {resources.map((link) => {
                const { id, title, url } = link;
                return (
                  <li
                    key={id}
                    className='text-white- w-80 rounded-lg bg-indigo-500 p-4 text-center text-xs shadow-lg hover:scale-110  md:w-96'>
                    <a href={url}>
                      <h2 className='text-lg text-white'>{title}</h2>
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
