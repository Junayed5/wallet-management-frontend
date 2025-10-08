import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000); // Simulated delay
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl top-10 left-10 animate-blob"></div>
      <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl bottom-10 right-10 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl p-8 md:p-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-2xl"
      >
        {!submitted ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Get in Touch with <span className="text-primary">MYCASH</span>
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
              Have questions or feedback? Fill out the form below — we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="peer w-full border border-gray-300 dark:border-gray-700 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-1 text-sm text-gray-500 peer-focus:text-indigo-500 transition-all"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  className="peer w-full border border-gray-300 dark:border-gray-700 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-1 text-sm text-gray-500 peer-focus:text-indigo-500 transition-all"
                >
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="peer w-full border border-gray-300 dark:border-gray-700 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-1 text-sm text-gray-500 peer-focus:text-indigo-500 transition-all"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="submit"
                className="w-full py-3 text-lg font-semibold bg-primary hover:bg-primary-dark text-white rounded-xl shadow-md transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center py-16"
          >
            <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your inquiry has been received. We’ll respond as soon as possible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-md"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.05); }
            66% { transform: translate(-20px, 30px) scale(0.95); }
          }
          .animate-blob { animation: blob 8s infinite ease-in-out; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}
