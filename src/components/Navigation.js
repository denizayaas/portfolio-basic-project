import React from 'react';
import content from '../content';

export default function Navigation() {
  return (
    <div style={{
      background:'#154c79',
    }}>
      <div className='flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis'>
      <h1 className='text-3xl font-bold'>{content.nav.logo} <span className='w-3 h-3 bg-white inline-block rounded-full'></span></h1>
      <div>
        {content.nav.links.map((link, index) => {
          return <button key={index} className='text-xl mr-8 items-center justify-center hover:text-black '>{link.text}</button>;
        })}
      </div>
      </div>
    </div>
  );
}
