import Image from 'next/image';
import InlineLayout from '../components/InlineLayout';
import ProfileIMG from '../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';

export default function Home() {
    return (
        <>
            <InlineLayout className='pt-0'>
                <div className='flex items-cente-justify-between w-full'>
                    <div className='w-1/2'>
                        <Image alt='Bryan Ordoñez' src={ProfileIMG} />
                    </div>
                    <div className='w-1/2 flex flex-col items-center self-center'>
                        <AnimatedText
                            text='Bryan Ordoñez Senior Full Stack Developer'
                            className='!text-6xl !text-left'
                        />
                        <p className='my-4 text-base font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium, quidem enim
                            cupiditate nostrum a expedita ducimus ea nemo ratione delectus iusto dolorum animi quo
                            libero quaerat, consequuntur voluptates officia?
                        </p>
                        <div className='flex items-center self-start mt-2'>
                            <Link
                                href='/CV Bryan Ordonez Full Stack Developer.pdf'
                                target='_blank'
                                className='flex items-center bg-dark text-light p-2.5 px-6 
                                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                                border-2 border-solid border-transparent hover:border-dark'
                                download={true}
                            >
                                Resume <LinkArrow className='w-6 ml-1' />
                            </Link>
                            <Link
                                href='/mailto:kirvi16@gmail.com'
                                target='_blank'
                                className='ml-4 text-lg font-medium capitalize text-dark uderline'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </InlineLayout>
        </>
    );
}
