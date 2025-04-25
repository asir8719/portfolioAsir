import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CursorEffect } from './CursorEffect';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      <CursorEffect />
    </div>
  );
};

export default Layout;