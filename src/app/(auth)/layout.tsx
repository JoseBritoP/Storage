import AuthNav from "@/components/Auth/shared/AuthNav";
import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand dark:bg-brand-100 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[80ppx] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            alt="logo"
            className="h-auto"
            src="/assets/icons/logo-full.svg"
            height={82}
            width={224}
          />
          <div className="space-y-5 text-white">
            <h1 className="text-[34px] leading-[42px] font-bold text-gray-200">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents.
            </p>
          </div>
          <Image
            alt="illustration"
            className="transition-all hover:rotate-2 hover:scale-105 duration-200 ease-linear delay-75"
            src="/assets/images/files.png"
            height={342}
            width={342}
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-gray-100 dark:bg-dark-200 p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <AuthNav/>
        <div className="flex flex-col mb-16 lg:hidden w-full items-center justify-center">
          <Image
            alt="logo"
            src="/assets/icons/logo-full-brand.svg"
            height={82}
            width={224}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
}
