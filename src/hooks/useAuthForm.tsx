"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormType } from "@/components/form/AuthForm";

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
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = authFormSchema(type);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return { isLoading, errorMessage, form, onSubmit };
}
