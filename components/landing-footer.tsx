import React from "react";

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-black/30 text-white text-center py-6 mt-20">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} CompileX. All Rights Reserved.
        </p>
        <p className="text-xs">
          Contact us at <a href="mailto:info@compilex.com" className="text-[#43d75d]">info@compilex.com</a>
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;