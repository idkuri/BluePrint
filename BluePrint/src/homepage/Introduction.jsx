import React from 'react';
import FadeInSection from '@/hooks/FadeInSection';


const Introduction = ({ introduction }) => {
    return (
        <div className="flex justify-center w-full bg-white py-30">
            <main
              className="flex flex-col min-h-screen w-full h-full z-10 text-black text-5xl font-semibold gap-80"
        
            >
                <FadeInSection>
                    <section className='flex flex-col gap-5 font-ibm-plex'>
                        <div className='flex items-center gap-2.5 px-10 md:px-20'>
                            <div className='flex w-3 h-3 bg-black shrink-0'/>
                            <h1 className='font-light text-xl md:text-[26px] lg:text-[32px]'>
                                INTRODUCTION OF THIS EVENT
                            </h1>
                        </div>
                        <p className='font-normal text-xl md:text-[26px] lg:text-[32px] px-10 md:px-20 leading-relaxed max-w-[90ch]'>
                            {introduction}
                        </p>
                    </section>
                </FadeInSection>
            </main>
        </div>
    );
};

export default Introduction;