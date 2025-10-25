import React from 'react';
import FadeInSection from '@/hooks/FadeInSection.jsx';

const Hero = ({ data }) => {
    console.log(data)
    if (!data) return;
    const { title, date, location } = data; 
    return (
        <div id="intro" className="flex justify-center bg-center -mt-20 md:mt-0 3xl:mt-0 2xl:bg-position-[center_90%] transition-all duration-250 bg-white bg-cover pointer-events-none" style={{ backgroundImage: "url('/images/hero.png')" }}>
            <main
              className="flex flex-col justify-center min-h-screen items-center w-full h-full z-10 text-white text-5xl font-family-[BRSonoma] font-semibold"
        
            >
            <FadeInSection>
                <section className='flex flex-col items-center gap-6 -mt-25 max-w-[714px]'>
                        <span className="text-[20px] font-normal">{date}</span>
                        <span className="text-center font-bold text-[63px]">{title}</span>
                        <span className="text-[22.5px] font-normal">{location}</span>
                </section>
            </FadeInSection>
            </main>
        </div>
    );
};

export default Hero;