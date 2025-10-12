import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";

export default function Register() {
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z
      .string()
      .min(11, "Phone number must be at least 11 digits")
      .max(14, "Phone number must be at most 14 digits"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
    },
  });

  const [createWallet] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const walletInfo = {
      name: data.name,
      phone: data.phone,
      password: data.password,
    };

    try {
      await createWallet(walletInfo).unwrap();
      toast.success("Wallet created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to create wallet.");
      console.error("Failed to create wallet:", error);
    }

    console.log(data);
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
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome To MYCASH👋
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Create your <span className="font-semibold text-primary">MYCASH</span>{" "}
          account
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="017********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Password */}
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-primary hover:bg-sidebar-primary text-white py-2.5 rounded-lg 
                         transition-all duration-300 font-semibold shadow-md cursor-pointer"
            >
              {/* {isLoading ? "Signing In..." : "Login"} */} Create Wallet
            </motion.button>
          </form>
        </Form>

        <h3>
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </h3>
      </div>
    </motion.div>
  );
}
