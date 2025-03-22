
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent animate-morph-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="gradient-text">AI Strategy</span> & Product Management Expertise
          </h1>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button
              className="inline-flex items-center px-6 py-6 text-lg bg-productify-blue text-white rounded-md hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
              asChild
            >
              <a
                href="https://newsletter.productifyai.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join the Newsletter <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
