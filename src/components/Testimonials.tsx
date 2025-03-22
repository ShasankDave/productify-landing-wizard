
import { useEffect, useRef } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "ProductifyAI has completely transformed how our team manages projects. What used to take hours now happens automatically in the background.",
    author: "Sarah Johnson",
    position: "Product Manager, TechCorp",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "I've tried dozens of productivity tools, but none comes close to the intuitive design and powerful automation of ProductifyAI.",
    author: "Michael Chen",
    position: "Freelance Designer",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "The AI-powered insights helped me identify bottlenecks in my workflow I didn't even know existed. Game-changer!",
    author: "Emily Rodriguez",
    position: "Marketing Director, GrowthLabs",
    stars: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialElements = testimonialsRef.current?.querySelectorAll('.testimonial-card');
    testimonialElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      testimonialElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Professionals</span> Worldwide
          </h2>
          <p className="text-lg text-productify-gray max-w-2xl mx-auto">
            See how ProductifyAI has helped thousands of professionals achieve more with less effort.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 md:flex hidden">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 md:flex hidden">
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 gap-6 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div ref={testimonialsRef} className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "testimonial-card glass-card p-8 rounded-xl min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center opacity-0",
                    "border border-blue-50"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 text-productify-dark italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-productify-dark">{testimonial.author}</p>
                      <p className="text-sm text-productify-gray">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
