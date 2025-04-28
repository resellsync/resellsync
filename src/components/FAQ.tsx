import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from './ui/ScrollReveal';

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You can sign up for ResellSync and use all features of your selected plan for 14 days without any payment. If you decide to continue using the platform, you'll be asked to provide payment information at the end of the trial. If not, your account will be automatically downgraded and you won't be charged."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new pricing takes effect immediately. When downgrading, the new pricing will apply at the start of your next billing cycle."
  },
  {
    question: "How does marketplace syncing work?",
    answer: "ResellSync connects directly to each marketplace's API. Once you authorize the connection, our system will automatically keep your inventory, pricing, and order statuses in sync across all connected platforms in real-time."
  },
  {
    question: "Is there a limit to how many products I can list?",
    answer: "Yes, each plan has a specific limit on the number of active listings you can have. The Starter plan supports up to 250 listings, Professional up to 1,000, and Enterprise offers unlimited listings."
  },
  {
    question: "Do you offer onboarding and training?",
    answer: "All plans include access to our knowledge base and video tutorials. The Professional plan includes a one-hour onboarding session, while the Enterprise plan offers comprehensive onboarding and training for your entire team."
  },
  {
    question: "What happens when I reach my listing limit?",
    answer: "You can still manage your existing listings, but you won't be able to create new ones until you either delete some existing listings or upgrade to a higher plan."
  }
];

const FAQ = () => {
  return (
    <div id="faq" className="container-section bg-muted">
      <div className="text-center mb-16">
        <h2 className="gradient-heading mb-4">Frequently Asked Questions</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Have questions about ResellSync? Find answers to common questions below.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-2">
          Still have questions?
        </p>
        <a 
          href="#" 
          className="text-brand-blue hover:text-brand-teal font-medium transition-colors"
        >
          Contact our support team
        </a>
      </div>
    </div>
  );
};

export default FAQ;
