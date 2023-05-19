'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type customLinkProps = {
    href: string;
    title: string;
    className: string;
};

const CustomLink: React.FC<customLinkProps> = ({ href, title, className }) => {
    const segment = `/${useSelectedLayoutSegment() || ''}`;

    const active = segment === href || (href === '/' && segment === null);

    return (
        <Link href={href} className={`${className} relative group`}>
            {' '}
            {title}{' '}
            <span
                className={`
                    ${active ? 'w-full' : 'w-0'}
                    h-[1px] inline-block bg-dark absolute 
                    left-0 -bottom-0.5 group-hover:w-full 
                    transition-[width] ease duration-300
            `}
            ></span>
        </Link>
    );
};
export default CustomLink;
