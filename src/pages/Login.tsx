import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    console.log("Form Submitted:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 
                 text-gray-900 dark:text-white min-h-[80vh] flex items-center justify-center px-6"
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back 👋</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Login to your <span className="font-semibold text-indigo-500">MYCASH</span> account
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="you@example.com"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg 
                         transition-all duration-300 font-semibold shadow-md"
            >
              {isLoading ? "Signing In..." : "Login"}
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-2">🎉 Success!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You’ve successfully logged into <strong>MYCASH</strong>.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
