import AnimatedText from '@/components/AnimatedText';
import InlineLayout from '@/components/InlineLayout';
import React from 'react';

import ProfilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import Skills from './Skills';

export const metadata = {
    title: 'Bryan | About',
    description: 'Bryan Ordoñez Full Stack Developer',
    viewport: 'width=device-width, initial-scale=1',
};

const AboutPage = () => {
    return (
        <main className='flex w-full flex-col items-center justify-center'>
            <InlineLayout className='pt-16'>
                <>
                    <AnimatedText text='Engeenier Bryan Ordoñez' className='mb-16' />
                    <div className='grid w-full grid-cols-9 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biolgraphy</h2>
                            <p className='font-medium'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ratione blanditiis
                                maiores expedita sunt cupiditate saepe recusandae soluta velit at amet, provident
                                asperiores aliquid obcaecati porro molestiae fugiat dolorem libero!
                            </p>
                            <p className='font-medium mt-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ratione blanditiis
                                maiores expedita sunt cupiditate saepe recusandae soluta velit at amet, provident
                                asperiores aliquid obcaecati porro molestiae fugiat dolorem libero!
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark ' />
                            <Image alt='Bryan Ordoñez' src={ProfilePic} className='w-full h-auto rounded-2xl' />
                        </div>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biolgraphy</h2>
                            <p className='font-medium'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ratione blanditiis
                                maiores expedita sunt cupiditate saepe recusandae soluta velit at amet, provident
                                asperiores aliquid obcaecati porro molestiae fugiat dolorem libero!
                            </p>
                            <p className='font-medium mt-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ratione blanditiis
                                maiores expedita sunt cupiditate saepe recusandae soluta velit at amet, provident
                                asperiores aliquid obcaecati porro molestiae fugiat dolorem libero!
                            </p>
                        </div>
                    </div>
                    <Skills />
                </>
            </InlineLayout>
        </main>
    );
};

export default AboutPage;
