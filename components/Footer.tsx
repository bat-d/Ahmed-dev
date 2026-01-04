import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-slate-950 text-center border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-slate-500 font-mono text-sm">
        <p className="mb-2">
          Designed & Built by <span className="text-primary">Ahmed Dev</span>
        </p>
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Ahmed Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;