import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// Dummy data for categories and FAQs
const categories = [
  {
    title: 'Ordering',
    faqs: [
      {
        question: 'How do I place an order?',
        answer: 'To place an order, select your desired product, choose your size, and click "Add to Cart." Proceed to checkout to complete your order.',
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'Yes, you can modify or cancel your order within 24 hours. Please contact our customer service for assistance.',
      },
    ],
  },
  {
    title: 'Shipping',
    faqs: [
      {
        question: 'What shipping options do you offer?',
        answer: 'We offer Standard, Express, and Next-Day shipping options at checkout.',
      },
      {
        question: 'How long does shipping take?',
        answer: 'Shipping times vary: Standard shipping usually takes 3-5 business days, while Express shipping takes 1-3 business days.',
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes, free shipping is available for orders over $50!',
      },
    ],
  },
  {
    title: 'Returns',
    faqs: [
      {
        question: 'What is your return policy?',
        answer: 'Items can be returned within 30 days of receipt. Please ensure they are unworn and in original packaging.',
      },
      {
        question: 'How do I initiate a return?',
        answer: 'To initiate a return, please visit our Returns page and follow the instructions provided.',
      },
    ],
  },
  {
    title: 'Customer Support',
    faqs: [
      {
        question: 'How can I contact customer service?',
        answer: 'You can reach our customer service team at jaman0120@gmail.com or by calling +918356965884.',
      },
      {
        question: 'What are your customer service hours?',
        answer: 'Our customer service hours are Monday to Friday, 9 AM to 6 PM EST.',
      },
    ],
  },
];

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className="flex justify-between items-center w-full p-4 text-left transition-all duration-200 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <AiOutlineMinus className="text-blue-600" />
              ) : (
                <AiOutlinePlus className="text-blue-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200 transition-all duration-200 ease-in-out">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Company Logo and Name */}
        <div className="flex justify-center items-center mb-8">
          <img
            src="/Logo.png" // Replace with your logo URL
            alt="Company Logo"
            className="h-28 mr-3"
          />
          <h1 className="text-5xl font-bold text-gray-800">FOOTDISE</h1> {/* Replace with your company name */}
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our FAQs to find answers to your questions about our footwear products and services.
        </p>
        {categories.map((category, index) => (
          <FAQSection key={index} title={category.title} faqs={category.faqs} />
        ))}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="mailto:jaman0120@gmail.com" className="text-blue-600 underline font-semibold">
              Contact our support team!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
