import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe } from "lucide-react";
import wallet from '../assets/images/wallet.jpg'
import aboutBanner from '../assets/images/banner.jpg'

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero / Header */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white min-h-[80vh] flex items-center">
      {/* Decorative background */}
        {/* Background decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-16 -left-16 animate-blob"></div>
          <div className="absolute w-80 h-80 bg-white/20 rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About <span className="text-primary">MYCASH</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              Discover how MYCASH is revolutionizing digital wallet management.
              Secure, fast, and reliable solutions designed to empower your
              finances.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-primary text-foreground font-semibold rounded-xl shadow-lg hover:bg-primary/80 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image / Illustration Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={aboutBanner}
              alt="Digital Wallet Illustration"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Optional animated blob effect */}
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
      </section>
      {/* Service Story */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={wallet}
            alt="Digital Wallet"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            MYCASH began with a vision to make financial transactions effortless
            and accessible for everyone. From{" "}
            <span className="font-semibold">cash in/out</span> to{" "}
            <span className="font-semibold">instant transfers</span>, our secure
            platform is designed to put you in control of your money.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With a growing community of users, MYCASH is redefining how people
            interact with money in their daily lives.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Our Mission
          </motion.h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            To empower individuals and businesses with seamless, safe, and
            innovative digital wallet solutions that bring financial freedom to
            everyone.
          </p>

          {/* Mission highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
                title: "Security First",
                desc: "Top-grade encryption ensures your money is always safe.",
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-500" />,
                title: "Fast Transactions",
                desc: "Send and receive money instantly, anytime, anywhere.",
              },
              {
                icon: <Globe className="w-10 h-10 text-green-500" />,
                title: "Global Reach",
                desc: "Connecting people across borders with seamless payments.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The innovators behind MYCASH – building the future of finance.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ayesha Khan",
              role: "CEO & Founder",
              img: "https://i.pravatar.cc/300?img=47",
            },
            {
              name: "Rahul Das",
              role: "CTO",
              img: "https://i.pravatar.cc/300?img=12",
            },
            {
              name: "Maya Roy",
              role: "Product Designer",
              img: "https://i.pravatar.cc/300?img=25",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
