import React from 'react';

type HeroLayoutProps = {
    className?: string;
    children: JSX.Element;
};

const InlineLayout: React.FC<HeroLayoutProps> = ({ className, children }) => {
    return <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>{children}</div>;
};

export default InlineLayout;
