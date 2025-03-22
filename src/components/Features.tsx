
import { useEffect, useRef } from 'react';
import { Brain, Zap, Clock, PenTool, Shield, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-productify-blue" />,
    title: "AI-Powered Insights",
    description: "Leverage advanced machine learning to analyze your workflow and receive personalized optimization suggestions.",
  },
  {
    icon: <Zap className="w-8 h-8 text-productify-blue" />,
    title: "Automated Task Management",
    description: "Let our AI handle your repetitive tasks while you focus on the creative and strategic aspects of your work.",
  },
  {
    icon: <Clock className="w-8 h-8 text-productify-blue" />,
    title: "Smart Time Tracking",
    description: "Track your productive hours automatically and receive reports on where you spend your time most efficiently.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-productify-blue" />,
    title: "Customizable Workflows",
    description: "Tailor the platform to your needs with flexible automation rules and integrations with your favorite tools.",
  },
  {
    icon: <Shield className="w-8 h-8 text-productify-blue" />,
    title: "Privacy-Focused Design",
    description: "Your data stays yours. Our systems are designed with privacy at the core, ensuring your information is always secure.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-productify-blue" />,
    title: "Continuous Learning",
    description: "The more you use ProductifyAI, the smarter it gets, constantly adapting to your evolving workflow patterns.",
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featuresElements = featuresRef.current?.querySelectorAll('.feature-card');
    featuresElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      featuresElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to <span className="gradient-text">Transform</span> Your Workflow
          </h2>
          <p className="text-lg text-productify-gray max-w-2xl mx-auto">
            Discover how ProductifyAI's innovative features can revolutionize the way you work and boost your productivity.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "feature-card rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md bg-white opacity-0",
                "hover:border-blue-100 hover:-translate-y-1"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-productify-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
