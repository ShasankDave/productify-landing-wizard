
import { useEffect, useRef } from 'react';
import { Lightbulb, PieChart, TrendingUp, Book, Briefcase, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-productify-blue" />,
    title: "AI Strategy Consulting",
    description: "Strategic guidance on AI implementation, identifying opportunities, and creating roadmaps for AI transformation in your business.",
  },
  {
    icon: <PieChart className="w-8 h-8 text-productify-blue" />,
    title: "Product Management",
    description: "End-to-end AI product development from ideation to market launch, including requirements gathering and feature prioritization.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-productify-blue" />,
    title: "Market Analysis",
    description: "Comprehensive AI landscape analysis, competitor benchmarking, and technology trend forecasting to keep you ahead of the curve.",
  },
  {
    icon: <Book className="w-8 h-8 text-productify-blue" />,
    title: "Content Creation",
    description: "Thought leadership articles, case studies, and technical content that positions you as an authority in the AI space.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-productify-blue" />,
    title: "Executive Advisory",
    description: "C-level guidance on AI governance, ethics, and organizational change management to support AI initiatives.",
  },
  {
    icon: <Users className="w-8 h-8 text-productify-blue" />,
    title: "Workshop Facilitation",
    description: "Interactive sessions to align teams, brainstorm AI use cases, and develop practical implementation plans.",
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
            <span className="gradient-text">Expert Services</span> in AI Strategy & Product
          </h2>
          <p className="text-lg text-productify-gray max-w-2xl mx-auto">
            Specialized consulting and content creation to help you navigate the complex world of AI and build successful products.
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
