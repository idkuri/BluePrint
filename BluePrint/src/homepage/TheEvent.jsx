import React from 'react';
import FadeInSection from '@/hooks/FadeInSection.jsx';
import Image from 'next/image';

const TheEvent = ({ description }) => {
    return (
        <div className="flex justify-center bg-white">
            <main
              className="flex flex-col min-h-screen w-full h-full z-10 text-black text-5xl font-family-[BRSonoma] py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20"
            >
            <FadeInSection>
                <section id="speaker" className='flex flex-col items-center gap-10 sm:gap-12 md:gap-[60px]'>
                    <h1 className='font-semibold font-BRSonoma whitespace-pre text-center text-5xl sm:text-7xl md:text-8xl lg:text-[112px]'>{`The Event`}</h1>
                    
                    <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-0'>
                        <div className='flex flex-col gap-5 font-ibm-plex-mono w-full lg:w-1/2'>
                            <div className='flex items-center gap-2.5 px-4 sm:px-10 md:px-20'>
                                <div className='flex w-3 h-3 bg-black shrink-0'/>
                                <h1 className='font-light text-xl md:text-[24px] lg:text-[24px]'>
                                    INTRODUCTION OF THIS EVENT
                                </h1>
                            </div>
                            <p className='font-normal text-xl md:text-[24px] lg:text-[24px] px-4 sm:px-10 md:px-20 leading-relaxed font-ibm-plex'>
                                {description}
                            </p>
                        </div>
                        
                        <div className='flex flex-col gap-5 font-ibm-plex-mono w-full lg:w-1/2'>
                            <div className='flex items-center gap-2.5 px-4 sm:px-10 md:px-20'>
                                <div className='flex w-3 h-3 bg-black shrink-0'/>
                                <h1 className='font-light text-xl md:text-[24px] lg:text-[24px]'>
                                    OUR PAST EVENTS
                                </h1>
                            </div>
                            <div className='px-4 sm:px-10 md:px-20'>
                                <Image
                                    src="/images/TheEventMid.png"
                                    alt="Past Event"
                                    width={450}
                                    height={300}
                                    className='w-full lg:w-[80%] h-auto'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center relative w-full py-8 lg:py-0'>
                        <div className='flex justify-center items-center w-full'>
                            <div className='relative w-full max-w-[1142px] px-4 sm:px-6'> 
                                {/* Mobile: Stack vertically */}
                                <div className='flex flex-col gap-4 lg:hidden'>
                                    <Image
                                        src="/images/TheEventBot5.png"
                                        alt="Event Bottom 1"
                                        width={439}
                                        height={329}
                                        className='w-auto h-auto'
                                    />
                                    <Image
                                        src="/images/TheEventBot2.png"
                                        alt="Event Bottom 2"
                                        width={439}
                                        height={329}
                                        className='w-auto h-auto'
                                    />
                                    <Image
                                        src="/images/TheEventBot3.png"
                                        alt="Event Bottom 3"
                                        width={439}
                                        height={329}
                                        className='w-auto h-auto'
                                    />
                                </div>
                                
                                {/* Desktop: Overlapping layout */}
                                <div className='hidden lg:block relative h-[368px]'>
                                    <Image
                                        src="/images/TheEventBot5.png"
                                        alt="Event Bottom 1"
                                        width={439}
                                        height={329}
                                        className='absolute top-[39px] left-0 z-10'
                                    />
                                    <Image
                                        src="/images/TheEventBot2.png"
                                        alt="Event Bottom 2"
                                        width={439}
                                        height={329}
                                        className='absolute top-3.5 left-[308px] z-20'
                                    />
                                    <Image
                                        src="/images/TheEventBot3.png"
                                        alt="Event Bottom 3"
                                        width={439}
                                        height={329}
                                        className='absolute top-[39px] left-[703px] z-10'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                
                </section>
            </FadeInSection>
            </main>
            
        </div>
    );
};

export default TheEvent;