import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowUpCircle, Send, Clock, ShieldCheck, Smartphone } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Cash In",
      desc: "Easily add money to your wallet from your bank or linked card in seconds.",
      icon: <ArrowDownCircle className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Cash Out",
      desc: "Withdraw your funds instantly to your bank account or mobile balance securely.",
      icon: <ArrowUpCircle className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Send Money",
      desc: "Transfer money to friends, family, or businesses anytime, anywhere.",
      icon: <Send className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Transaction History",
      desc: "View all your wallet transactions with real-time tracking and insights.",
      icon: <Clock className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Advanced Security",
      desc: "Your money and data are protected with multi-layer encryption and secure login.",
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Mobile Access",
      desc: "Manage your wallet on the go with our intuitive and responsive mobile design.",
      icon: <Smartphone className="w-10 h-10 text-purple-500" />,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header / Banner */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white min-h-[30vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          <span className="text-primary">MYCASH</span> Features
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-blue-100 max-w-2xl mx-auto ">
          Everything you need to manage your digital wallet—securely, quickly, and effortlessly.
        </p>

        {/* Soft background shapes */}
        <div className="absolute inset-0">
          <div className="absolute w-80 h-80 bg-white/10 rounded-full blur-3xl -top-20 left-1/4 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-0 right-1/4 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">What Makes MYCASH Powerful</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our core features built for security, speed, and convenience.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-center">{f.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional animation style */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.05); }
            66% { transform: translate(-20px, 30px) scale(0.95); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </div>
  );
}
