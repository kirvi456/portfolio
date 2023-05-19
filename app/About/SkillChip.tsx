'use client';
import React from 'react';

import { motion } from 'framer-motion';

type SkillChipProps = {
    label: string;
    x: string;
    y: string;
    center?: boolean;
};

const SkillChip: React.FC<SkillChipProps> = ({ label, x, y, center = false }) => {
    return (
        <motion.div
            className={` 
            absolute flex items-center justify-center rounded-full font-semibold bg-dark
            text-light  shadow-dark cursor-pointer
            ${center ? 'p-8' : 'px-6 py-3'}`}
            whileHover={{
                scale: 1.05,
            }}
            initial={{
                x: 0,
                y: 0,
            }}
            whileInView={{
                x: center ? 0 : x,
                y: center ? 0 : y,
            }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {label}
        </motion.div>
    );
};

export default SkillChip;
