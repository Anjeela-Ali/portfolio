import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Ammer HUssain
              </h2>
              
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Personable, detail-oriented, and self-motivated administrative leader with over 14+ years of experience in education sector. Highly regarded leadership abilities with team-player mentality. Applied innate interpersonal skills to establish and maintain positive relationships and improve workplace morale. Calm and productive under extreme stress. Proactive and very keen to challenge myself within a dynamic environment. <br />
                <br />
                Possessing excellent administrative, verbal communication and written skills along with constructive and effective teaching methods that promote a stimulating learning environment.
                Assured people skills and communication abilities: adept in English and Urdu.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
