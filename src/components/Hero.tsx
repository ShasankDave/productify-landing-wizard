
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent animate-morph-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-productify-blue opacity-0 animate-fade-in">
            <span className="text-sm font-medium">AI Product Management & Strategy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="gradient-text">AI Strategy</span> & Product Management Expertise
          </h1>
          
          <p className="text-lg md:text-xl text-productify-gray mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Helping businesses navigate the AI landscape with strategic insights and product innovation. 
            Turning complex AI concepts into valuable products and content.
          </p>
          
          <div className="space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3 bg-productify-blue text-white rounded-md hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Services <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#content"
              className="inline-flex items-center px-6 py-3 bg-white text-productify-dark rounded-md border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            >
              View Content
            </a>
          </div>
        </div>
        
        <div className="mt-16 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="glass-card rounded-xl overflow-hidden subtle-shadow mx-auto max-w-4xl">
            <img 
              src="https://images.unsplash.com/photo-1655720828018-edd2daec9349" 
              alt="AI Strategy and Product Management" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-100 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
