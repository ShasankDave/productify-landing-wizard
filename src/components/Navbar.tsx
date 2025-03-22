
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-productify-dark">Productify<span className="text-productify-blue">AI</span></span>
          </a>

          {/* Desktop Navigation - Removed all links */}
          <div className="hidden md:flex space-x-8">
            {/* No navigation links */}
          </div>

          {/* Call to Action Button - Removed */}
          <div className="hidden md:block">
            {/* No CTA button */}
          </div>

          {/* Mobile Menu Button - Removed since there's no menu content */}
          <button
            className="md:hidden text-productify-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ visibility: 'hidden' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Empty but kept for structure */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          {/* No mobile menu items */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
