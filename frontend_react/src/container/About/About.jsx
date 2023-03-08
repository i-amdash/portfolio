import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

// const Abouts = [
//   { title: 'Graphic Designer', description: 'I am a good graphic designer', imgUrl: images.about01 },
//   { title: 'Arstist', description: 'I am a brilliant artist', imgUrl: images.about02 },
//   { title: 'Talent', description: 'I have limitless talent', imgUrl: images.about03 },
//   { title: 'UI/UX', description: 'I have limitless talent', imgUrl: images.about04 }
// ]

const About = () => {

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
   const query = '*[_type == "abouts"]';
   client.fetch(query)
   .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
    <h2 className='head-text'>I know that <span>Good Design</span> <br /> means <span>Good Buiness</span></h2>

    <div className="app__profiles">
      {
        abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profiles-item"
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))
      }
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"), 
  'about',
  "app__whitebg");