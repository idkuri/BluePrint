import React from 'react';
import Image from 'next/image';
import FadeInSection from '@/hooks/FadeInSection';

const PRIVATE_API_URL = process.env.PRIVATE_API_URL || 'http://backend:5050';

const Speaker = ({ speakers = [] }) => {
    return (
        <div className="flex justify-center bg-white">
            <main className="flex flex-col min-h-screen justify-center items-center w-full h-full z-10 text-black text-5xl font-family-[BRSonoma] px-4 sm:px-6 lg:px-8">
                <FadeInSection>
                    <section id="speaker" className="flex flex-col items-center gap-10 sm:gap-12 md:gap-[60px]">
                        <h1 className="font-semibold font-BRSonoma whitespace-pre text-center text-5xl sm:text-7xl md:text-8xl lg:text-[112px]">
                            Speakers
                        </h1>

                        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 lg:gap-24 items-center font-ibm-plex justify-center">
                            {speakers.map((speaker, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-center gap-4 sm:gap-6"
                                >
                                    <div className="relative">
                                        <Image
                                            src={`${PRIVATE_API_URL}${speaker.picture}`}
                                            alt={speaker.name}
                                            width={270}
                                            height={270}
                                            className="w-[200px] h-[200px] sm:h-60 md:w-[200px] md:h-[200px] lg:w-[270px] lg:h-[270px] rounded-full object-cover border-4 border-white shadow-lg"
                                            priority={index < 2} // Load first 2 immediately
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyQ0O//Z"
                                        />
                                    </div>

                                    <div className="flex flex-col text-center gap-3 sm:gap-5 md:gap-7">
                                        <p className="text-xl sm:text-[22px] md:text-[24px] font-bold text-black">
                                            {speaker.name}
                                        </p>
                                        <p className="text-xl sm:text-[22px] md:text-[24px] font-normal text-black opacity-40 uppercase tracking-wider">
                                            {speaker.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInSection>
            </main>
        </div>
    );
};

export default Speaker;