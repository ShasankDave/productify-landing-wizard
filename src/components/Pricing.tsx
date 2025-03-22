
import { Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: 9,
    yearlyPrice: 99,
    description: "Perfect for individuals getting started with productivity optimization.",
    features: [
      "AI task automation",
      "Basic workflow insights",
      "5 custom automation rules",
      "Email support",
      "1 user"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 299,
    description: "Ideal for professionals and small teams seeking advanced productivity tools.",
    features: [
      "Everything in Basic",
      "Advanced AI insights",
      "20 custom automation rules",
      "Team collaboration features",
      "Priority support",
      "3 users"
    ],
    popular: true,
    cta: "Try 14 Days Free"
  },
  {
    name: "Enterprise",
    monthlyPrice: 79,
    yearlyPrice: 799,
    description: "Comprehensive solution for businesses with complex workflow requirements.",
    features: [
      "Everything in Pro",
      "Unlimited automation rules",
      "Custom integrations",
      "Dedicated account manager",
      "API access",
      "SSO authentication",
      "Unlimited users"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-productify-gray max-w-2xl mx-auto">
            Choose the perfect plan for your productivity needs. Cancel anytime.
          </p>
          
          <div className="inline-flex items-center p-1 mt-8 border border-gray-200 rounded-md bg-white">
            <button
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                billingCycle === 'monthly' 
                  ? "bg-productify-blue text-white" 
                  : "text-gray-500 hover:text-productify-dark"
              )}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                billingCycle === 'yearly' 
                  ? "bg-productify-blue text-white" 
                  : "text-gray-500 hover:text-productify-dark"
              )}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-xs ml-1 opacity-80">20% off</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "border rounded-xl p-8 bg-white transition-all duration-300 opacity-0 animate-fade-in-up hover:shadow-md",
                plan.popular 
                  ? "border-blue-200 shadow-md relative z-10 scale-105 lg:scale-110 -mt-4" 
                  : "border-gray-100"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-productify-blue text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-productify-gray mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-productify-gray">
                  /{billingCycle === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check size={18} className="text-productify-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={cn(
                  "w-full py-3 rounded-md font-medium transition-all duration-200",
                  plan.popular 
                    ? "bg-productify-blue text-white hover:bg-blue-600" 
                    : "bg-white text-productify-dark border border-gray-200 hover:bg-gray-50"
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
