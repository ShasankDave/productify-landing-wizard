
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-productify-dark hover:text-productify-blue transition-colors duration-200">Features</a>
            <a href="#testimonials" className="text-productify-dark hover:text-productify-blue transition-colors duration-200">Testimonials</a>
            <a href="#pricing" className="text-productify-dark hover:text-productify-blue transition-colors duration-200">Pricing</a>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="px-5 py-2.5 bg-productify-blue text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-productify-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          <a 
            href="#features" 
            className="text-productify-dark hover:text-productify-blue py-2 text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-productify-dark hover:text-productify-blue py-2 text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-productify-dark hover:text-productify-blue py-2 text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#cta"
            className="px-5 py-2.5 bg-productify-blue text-white rounded-md hover:bg-blue-600 transition-all duration-200 mx-auto"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
