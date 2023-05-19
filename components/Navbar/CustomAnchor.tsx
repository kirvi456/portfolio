'use client';
import React from 'react';

import { motion } from 'framer-motion';

type customAncherProps = {
    href: string;
    children: JSX.Element;
    className?: string;
};

const CustomAnchor: React.FC<customAncherProps> = ({ href, children, className }) => {
    return (
        <motion.a
            href={href}
            className={`${className} w-8 mr-2`}
            target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.a>
    );
};

export default CustomAnchor;
