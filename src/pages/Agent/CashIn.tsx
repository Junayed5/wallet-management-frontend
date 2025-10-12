import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCashInMutation } from "@/redux/features/agent/agent.api";
import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";
import type { TError } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Banknote, KeyRound, Send, Wallet } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function CashIn() {
  const { data: walletData, isLoading } = useGetMyWalletQuery(undefined);
  const [cashIn] = useCashInMutation();

  const formSchema = z.object({
    userNumber: z.string().min(11, {
      message: "User number must be at least 11 digits.",
    }),
    amount: z.string().min(1, {
      message: "Amount must be at least 1.",
    }),
    agentPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userNumber: "",
      amount: "",
      agentPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const sendData = {
      agentNumber: walletData?.wallet?.phone,
      userNumber: values.userNumber,
      amount: values.amount,
      agentPassword: values.agentPassword,
    };

    try {
      await cashIn(sendData).unwrap();
      toast.success("Cash In successfully!");
      form.reset();
    } catch (error: unknown) {
      const err = error as TError;
      toast.error(
        err?.data?.message || "Failed to Cash In. Please try again."
      );
    }
  }

  return (
    <Card className="w-96 mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold text-primary">
          Cash In
        </CardTitle>
      </CardHeader>

      <Separator className="mb-4" />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="Enter Number"
                        className="peer ps-9 [direction:inherit]"
                      />
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <Wallet size={16} aria-hidden="true" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="Enter Amount"
                        className="peer ps-9 [direction:inherit]"
                      />
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <Banknote size={16} aria-hidden="true" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter Password"
                        className="peer ps-9 [direction:inherit]"
                      />
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <KeyRound size={16} aria-hidden="true" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full gap-2 text-white"
              >
                {/* {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Money
                </>
              )} */}
                <Send className="h-4 w-4" /> Cash In
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
