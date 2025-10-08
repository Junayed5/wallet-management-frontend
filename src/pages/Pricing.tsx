import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "Free",
    desc: "Perfect for individuals starting their digital wallet journey.",
    features: ["Send & Receive Money", "Instant Wallet Transfers", "Basic Security Layer"],
  },
  {
    title: "Pro",
    price: "$9.99/mo",
    desc: "For power users who want more control and analytics.",
    features: [
      "Everything in Basic",
      "Advanced Analytics",
      "Priority Support",
      "Cashback Rewards",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    desc: "Tailored solutions for businesses and organizations.",
    features: [
      "Unlimited Transactions",
      "Dedicated Account Manager",
      "API Integration",
      "Advanced Fraud Protection",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white min-h-[100vh] py-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Choose Your <span className="text-primary">Plan</span>
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Select the plan that fits your needs — whether you're just getting started or managing large-scale transactions.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className={`p-8 rounded-2xl shadow-lg transition-all ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary to-ring text-white scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              }`}
            >
              <motion.h3 layout className="text-2xl font-bold mb-2">
                {plan.title}
              </motion.h3>
              <p
                className={`text-lg mb-4 ${
                  plan.highlight ? "text-indigo-100" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {plan.desc}
              </p>
              <div className="text-4xl font-extrabold mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>✅</span> {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`w-full py-3 font-semibold rounded-xl shadow-md ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary hover:bg-ring text-white"
                }`}
              >
                {plan.highlight ? "Get Pro Plan" : "Choose Plan"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
