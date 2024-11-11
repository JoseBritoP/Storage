/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import Image from "next/image";
import { sendEmailOTP, verifySecret } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { FormType } from "../form/AuthForm";

interface OTPModalProps {
  email: string;
  accountId: string;
  type: FormType;
  fullName?: string;
}

export function OTPModal({
  email = "test@gmail.com",
  fullName,
  accountId,
  type
}: OTPModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Call API to verify otp
      const sessionId = await verifySecret({ accountId, password });
      if (!sessionId) throw new Error("Error getting sessionId ");
      router.push("/");
      const message = type === 'sign-in' ? 'Welcome back!' : fullName && `Welcome to StoreIt ${fullName}!'`
      toast.success(message);
    } catch (error) {
      console.log("Failed to verify OTP", error);
      toast.error("Failed to verify OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    await sendEmailOTP({ email });
    toast('Check your email');
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="shad-alert-dialog ">
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h2 text-center">
            Enter your OTP
            <button>
              <Image
                alt="close"
                src="/assets/icons/close-dark.svg"
                height={20}
                width={20}
                onClick={() => setIsOpen(false)}
                className="otp-close-button"
                aria-label="Close modal"
              />
            </button>
          </AlertDialogTitle>
          <AlertDialogDescription>
            {"We've sent a code to "}{" "}
            <span className="pl-1 text-brand"> {email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center items-center">
          <InputOTP maxLength={6} value={password} onChange={setPassword}>
            <InputOTPGroup className="shad-top gap-x-1 md:gap-x-2 shadow-sm">
              <InputOTPSlot index={0} className="shad-otp-slot" />
              <InputOTPSlot index={1} className="shad-otp-slot" />
              <InputOTPSlot index={2} className="shad-otp-slot" />
              <InputOTPSlot index={3} className="shad-otp-slot" />
              <InputOTPSlot index={4} className="shad-otp-slot" />
              <InputOTPSlot index={5} className="shad-otp-slot" />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">
            <AlertDialogAction
              onClick={handleSubmit}
              className="shad-submit-btn h-12"
              type="button"
            >
              Continue
              {isLoading && (
                <Image
                  alt="loader"
                  src="/assets/icons/loader.svg"
                  height={24}
                  width={24}
                  className="ml-2 animate-spin"
                />
              )}
            </AlertDialogAction>
            <div className="subtitle-2 mt-2 text-center text-light-100">
              {"Didn't get a code?"}
              <Button
                type="button"
                variant="link"
                className="pl-1 text-brand"
                onClick={handleResendOtp}
                aria-label="Resend otp button"
              >
                Click to resend
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
