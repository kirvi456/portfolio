import React from 'react';
import InlineLayout from './InlineLayout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <InlineLayout className='py-8 flex items-center justify-between '>
                <>
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    <div className='flex items-center'>
                        Build width <span className='text-primary text-2xl px-1'>&#9825;</span> by kirvi
                    </div>
                    <Link href='' target='_blank' className='underline'>
                        Follow me
                    </Link>
                </>
            </InlineLayout>
        </footer>
    );
};

export default Footer;
