import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from 'react-scroll/modules';
import { Link as ScrollLink } from 'react-scroll';
import Typical from 'react-typical'
import content from '../content';

export default function Header() {

  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, [])

  return (
  <div className='min-h-screen flex items-center justify-center'
    style={{
      background: '#154c79'
    }}>
    <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
      <div className='w-full md:w-2/5'>
        <LazyLoadImage className='rounded-xl gradient-to-l from-cyan-500 to-blue-500'
        src={content.header.img} 
        effect='blur' 
        />
      </div>
      <div className='text-white font-dosis text-center md:text-left'>
        <h2
          className={`${
            animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
        >
          {content.header.text[0]}
          <br />
          {content.header.text[1]}
        </h2>
        <h1
          className={`${
            animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
        >
          {content.header.text[2]}{' '}
          <Typical
            steps={content.header.typical}
            loop={Infinity}
            className='inline-block'
          />
        </h1>
        <ScrollLink to="stack" smooth={true}>
        <button className='bg-blue-600 px-10 py-3 mt-5 rounded-xl'>
        {content.header.btnText}
        </button>
        </ScrollLink>
      </div>
    </div>
  </div>
  );
}
