import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/Logo.png" alt="FootDise Logo" className="w-40 h-auto" /> {/* Adjust size here */}
        <div className="text-center flex-grow">
          <motion.h1
            className="text-4xl font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FootDise - A STYLE FOR EVERY STORY
          </motion.h1>
          <motion.p
            className="mt-2 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover footwear that fits your unique journey.
          </motion.p>
        </div>
      </div>
    </header>
  );
}


function AboutUs() {
  return (
    <section className="bg-white p-12 text-center relative">
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-left w-1/2 pr-6">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to our shoe website! We are a family-owned business that has
            been providing quality footwear for over 50 years. Our journey began
            with a passion for craftsmanship and a dedication to our customers.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We specialize in creating shoes that blend style with comfort,
            designed for true travel lovers. Our products are lightweight,
            durable, and perfect for any adventure. Join us in walking the path
            of excellence.
          </p>
        </div>
        <div className="w-1/2 relative">
          <motion.img
            src="/shoe-2.png"
            alt="Shoe"
            className="w-3/4 mx-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function Policies() {
  return (
    <section className="bg-gray-100 p-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        RETURN & CLAIM POLICIES
      </h2>
      <motion.div
        className="flex justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg w-5/12"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Return Policy</h3>
          <ul className="text-left text-gray-700 space-y-3">
            <li>
              Products can be returned within 30 days from the date of purchase.
            </li>
            <li>
              Products must be in new and unused condition, with all original
              packaging and tags.
            </li>
            <li>Proof of purchase is required for all returns.</li>
            <li>
              Free returns available, or a fee may apply for shipping and
              handling.
            </li>
            <li>Refunds issued to the original form of payment.</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
            Explore
          </button>
        </motion.div>
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg w-5/12"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Claim Policy</h3>
          <ul className="text-left text-gray-700 space-y-3">
            <li>
              Contact us immediately if you receive a defective or damaged
              product.
            </li>
            <li>
              Provide proof of purchase and evidence of the defect or damage.
            </li>
            <li>
              We may offer a replacement, repair, or refund depending on the
              claim.
            </li>
            <li>
              Claims must be submitted within 30 days from the date of purchase.
            </li>
            <li>
              Product returns or photos may be required before processing the
              claim.
            </li>
          </ul>
          <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg">
            Explore
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Shipping() {
  const Navigate = useNavigate();


  return (
    <section className="bg-white p-12 text-center">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        WE’LL TAKE CARE OF SHIPPING YOUR SHOES
      </motion.h2>
      <motion.button
        className="bg-purple-600 text-white px-8 py-3 rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => Navigate('/faq')}
      >
        Frequently Asked Questions (FAQs)
      </motion.button>
    </section>
  );
}

function About() {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <AboutUs />
      <Policies />
      <Shipping />
    </div>
  );
}

export default About;
