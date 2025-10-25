import React from 'react';
import FadeInSection from '@/hooks/FadeInSection'

const Copyright = () => {
    return (
        <div className="flex justify-center items-center bg-white">
            <main
              className="flex flex-col justify-center items-center min-h-screen w-full h-full z-10 text-black text-5xl font-family-[BRSonoma] py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-50"
            >
                <FadeInSection>
                    <section id="Copyright" className='flex flex-col gap-10 sm:gap-12 md:gap-[60px]'>
                        <h1 className='font-semibold font-BRSonoma whitespace-pre text-4xl sm:text-7xl md:text-8xl lg:text-[112px] text-center'>{`The BluePrint Series`}</h1>
                        <span className='font-ibm-plex font-normal text-lg md:text-[16px] lg:text-[16px] text-center'>
                            © 2025 THE GRADIENT GROUP, LLC
                        </span>
                    </section>
                </FadeInSection>
            </main>
        </div>
    );
};

export default Copyright;