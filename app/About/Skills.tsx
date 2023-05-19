import React from 'react';
import SkillChip from './SkillChip';

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <SkillChip label='Web3' x='-20vw' y='2vw' center />
                <SkillChip label='Web' x='-20vw' y='2vw' />
                <SkillChip label='Web' x='-5vw' y='-10vw' />
                <SkillChip label='Web' x='20vw' y='6vw' />
                <SkillChip label='Web' x='0vw' y='12vw' />
                <SkillChip label='Web' x='-20vw' y='-15vw' />
                <SkillChip label='Web' x='15vw' y='-12vw' />
                <SkillChip label='Web' x='32vw' y='-5vw' />
                <SkillChip label='Web' x='0vw' y='-20vw' />
                <SkillChip label='Web' x='-25vw' y='18vw' />
                <SkillChip label='Web' x='18vw' y='18vw' />
            </div>
        </>
    );
};

export default Skills;
