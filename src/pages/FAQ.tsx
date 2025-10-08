"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is MYCASH?",
    answer:
      "MYCASH is a secure digital wallet that lets you send, receive, and manage money instantly — all in one place.",
  },
  {
    question: "Is MYCASH safe to use?",
    answer:
      "Absolutely. We use advanced encryption and two-factor authentication to ensure your money and data stay protected.",
  },
  {
    question: "How can I add money to my wallet?",
    answer:
      "You can add funds through your linked bank account, debit card, or mobile banking with just a few clicks.",
  },
  {
    question: "Does MYCASH charge transaction fees?",
    answer:
      "Basic transactions are free! However, certain premium features may include minimal service fees.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white min-h-[100vh] py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
        >
          Frequently Asked{" "}
          <span className="text-primary">Questions</span>
        </motion.h1>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-lg focus:outline-none"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-primary text-2xl"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="px-6 pb-5 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
