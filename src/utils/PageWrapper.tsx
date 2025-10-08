// src/components/PageWrapper.tsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router";

interface Props {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
  const { pathname } = useLocation();

  // Scroll to top smoothly on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
