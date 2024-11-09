"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormType } from "@/components/Auth/form/AuthForm";
import { createAccount, signInUser } from "@/lib/actions/user.actions";
import { toast } from "react-toastify";

const fullName = z.string().min(2).max(50);
const email = z.string().email();
export const authFormSchema = (formType: FormType) => {
  return z.object({
    email,
    fullName: formType === "sign-up" ? fullName : z.string().optional(),
  });
};

export default function useAuthForm(type: FormType) {

  const [isLoading, setIsLoading] = useState(false);
  const [accountId,setAccountId] = useState('')
  const formSchema = authFormSchema(type);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsLoading(true)
    try {
      const user = type === 'sign-up' ? 
      await createAccount({
        fullName:values.fullName || "",
        email:values.email
      })
      : await signInUser({email:values.email});  
      setAccountId(user.accountId)
      toast.info(`Check your email to confinue!`)
    } catch (error:unknown) {
      console.log(error)
      const message = type === 'sign-up' ? 'Failed to create account. Please try again' : 'Failed to logged. Please Try again'
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  };

  return { isLoading, form, onSubmit,accountId };
}
