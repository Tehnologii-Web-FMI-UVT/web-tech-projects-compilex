import React from 'react';
import Toolkit from './toolkit';

const ToolkitContent: React.FC = () => {
  const toolkitItems = [
    { id: 1, title: 'Code Generation', description: 'This feature is a time-saver for your development team. With CompileX, you can quickly generate reliable and efficient code. It adapts to various programming languages and integrates smoothly with your existing projects. Whether you are starting a new project or expanding an existing one, this tool can significantly speed up the development process with its AI-powered code suggestions and customizable templates.' },
    { id: 2, title: 'Code Review', description: "CompileX enhances the quality and security of your code. It automatically reviews code for potential issues, such as bugs, security vulnerabilities, and performance inefficiencies. This feature not only helps in maintaining a high standard of code but also streamlines the peer review process. It's integrated with common version control systems, making it a seamless part of your development workflow." },

  ];

  return (
    <div className="ToolkitContent">
      <Toolkit items={toolkitItems} />
    </div>
  );
}

export default ToolkitContent;