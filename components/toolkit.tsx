'use client';

import React, { useState } from 'react';

interface ToolkitItem {
    id: number;
    title: string;
    description: string;
  }

interface ToolkitProps {
  items: ToolkitItem[];
}

const Toolkit: React.FC<ToolkitProps> = ({ items }) => {
    const [activeTab, setActiveTab] = useState<number>(items[0].id);
  
    return (
      
      <div className="p-4">
        <div className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-semibold text-center mb-20'> 
            <h1>CompileX Toolkit</h1></div>
        <div className="flex space-x-2">
          {items.map(item => (
            <button
              key={item.id}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === item.id ? 'border-[#43d75d] text-[#43d75d] text-' : 'text-white border-transparent'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {items.map(item => {
            if (item.id === activeTab) {
              return (
                <div key={item.id} className="p-10 bg-[#182135] rounded-lg">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#43d75d] to-[#7dbe88] text-2xl font-bold mb-5">{item.title}</h3>
                  <p className='text-white'>{item.description}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  };
  
  export default Toolkit;