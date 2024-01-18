'use client'

import React from 'react';

interface KeyPointProps {
    title: string;
    description: string;
  }

const KeyPoint: React.FC<KeyPointProps> = ({ title, description }) => {
    return (
      <div className="flex flex-col items-center p-4 border border-white/10 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#43d75d] to-[#7dbe88]">{title}</h3>
        <p className="mt-2 text-white text-center">{description}</p>
      </div>
    );
  };

export const KeyPointsSection = () => {
    return ( 
        <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KeyPoint
            title="Advanced Code Generation"
            description="Automatically generates efficient and robust code, reducing development time."
          />
          <KeyPoint
            title="Intelligent Code Review"
            description="Automated system that identifies errors and optimizes code quality."
          />
          <KeyPoint
            title="Customizable and Scalable"
            description="Adapts to different project scales and complexities for all business sizes."
          />
        </div>
      </div>
    );
}
 
export default KeyPointsSection;