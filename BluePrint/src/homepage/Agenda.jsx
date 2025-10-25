import React from 'react';
import FadeInSection from '@/hooks/FadeInSection.jsx';

const Agenda = ({ agenda }) => {
    return (
        <div className="flex justify-center w-full bg-white py-30">
            <main
              className="flex flex-col min-h-screen w-full h-full z-10 text-black text-5xl font-semibold gap-80"
            >
            <FadeInSection>
                <section id="agenda" className='flex flex-col px-2.5 lg:px-[116px] gap-[60px]'>
                    <h1 className='font-semibold font-BRSonoma whitespace-pre text-center text-5xl sm:text-7xl md:text-8xl lg:text-[112px]'>{`Agenda`}</h1>
                    <div className='w-full'>
                        {/* Desktop View */}
                        <table className='hidden 2xl:table w-full text-black font-ibm-plex font-normal border-separate border-spacing-y-5'>
                            <tbody>
                                {agenda.map((item, index) => (
                                    <tr key={index} className='flex justify-center items-center pr-[50px] w-full border-b border-white text-[20px]'>
                                        <td className='flex flex-col py-9 w-[33%] text-start gap-2 border-l-[7px]'>
                                            <span className='px-10 text-[24px] text-nowrap'>{item.time}</span>
                                            <span className='px-10 text-[24px] text-nowrap'>{item.title}</span>
                                        </td>
                                        <td className='py-4 text-[24px] w-[33%] text-center'>{item.description}</td>
                                        <td className='py-4 text-[24px] w-[33%] text-end'>{item.location.toUpperCase()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobile View */}
                        <div className='2xl:hidden flex flex-col gap-6 w-full ml-5 lg:ml-0'>
                            {agenda.map((item, index) => (
                                <div key={index} className='border-l-[7px] border-black pl-6 py-4 flex flex-col gap-3 font-ibm-plex px-5'>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-base md:text-lg font-normal'>{item.time}</span>
                                        <span className='text-lg md:text-xl font-normal'>{item.title}</span>
                                    </div>
                                    <p className='text-base md:text-lg font-normal leading-relaxed max-w-[50%]'>{item.description}</p>
                                    <span className='text-base md:text-lg font-normal text-gray-600'>{item.location}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeInSection>
            </main>
        </div>
    );
};

export default Agenda;
