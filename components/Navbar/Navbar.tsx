import Link from 'next/link';
import Logo from '../Logo';
import CustomLink from './CustomLink';
import { TwitterIcon, GithubIcon, LinkedInIcon } from '../Icons';
import CustomAnchor from './CustomAnchor';

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink href='/About' title='About' className='mx-4' />
                <CustomLink href='/Projects' title='Projects' className='mx-4' />
                <CustomLink href='/Learnings' title='Learnings' className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <CustomAnchor href='https://twitter.com'>
                    <TwitterIcon />
                </CustomAnchor>
                <CustomAnchor href='https://twitter.com'>
                    <GithubIcon />
                </CustomAnchor>
                <CustomAnchor href='https://twitter.com'>
                    <LinkedInIcon />
                </CustomAnchor>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
