import Header from "@/components/shared/Header";
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if(!currentUser) redirect('/sign-in');
  
  return (
    <main className="flex h-screen">
      <Sidebar
        avatar={currentUser.avatar}
        email={currentUser.email}
        fullName={currentUser.fullName}
      />
      <section className="flex h-full flex-1 flex-col">
        <MobileNav {...currentUser} />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
}