
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="cta" className="bg-white pt-16 pb-8 px-6 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ProductifyAI</h3>
            <p className="text-productify-gray mb-6">
              Empowering professionals with AI-powered productivity tools to work smarter, not harder.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 text-productify-dark hover:bg-productify-blue hover:text-white transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 text-productify-dark hover:bg-productify-blue hover:text-white transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 text-productify-dark hover:bg-productify-blue hover:text-white transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-100 text-productify-dark hover:bg-productify-blue hover:text-white transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-productify-gray hover:text-productify-blue transition-colors duration-200">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-productify-blue" />
                <span className="text-productify-gray">contact@productifyai.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-productify-blue" />
                <span className="text-productify-gray">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-productify-blue" />
                <span className="text-productify-gray">123 Productivity Ave, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-productify-gray text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ProductifyAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-productify-gray hover:text-productify-blue text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-productify-gray hover:text-productify-blue text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-productify-gray hover:text-productify-blue text-sm transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
