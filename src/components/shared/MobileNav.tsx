"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react'
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user.actions";
import FileUplodeader from "./Header/FileUplodeader";
import DarkModeButton from "../ui/DarkModeButton";

interface Props {
  $id: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}

const MobileNav = ({
  $id: ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />
      <section className="flex justify-center items-center gap-x-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
           <Menu/>
          </SheetTrigger>
          <SheetContent className="shad-sheet h-screen px-3">
            <SheetTitle>
              <div className="header-user">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={44}
                  height={44}
                  className="header-user-avatar"
                />
                <div className="sm:hidden lg:block">
                  <p className="subtitle-2 capitalize">{fullName}</p>
                  <p className="caption">{email}</p>
                </div>
              </div>
              <div className="mb-4 border-b border-light-200/20" />
            </SheetTitle>

            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navItems.map(({ url, name,Icon }) => (
                  <Link key={name} href={url} className="lg:w-full">
                    <li
                      className={cn(
                        "mobile-nav-item transition-all duration-200 hover:bg-gray-100 dark:hover:bg-dark-200",
                        pathname === url && "shad-active"
                      )}
                    >
                      {/* <Image
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className={cn(
                          "nav-icon",
                          pathname === url && "nav-icon-active"
                        )}
                      /> */}
                      {React.cloneElement(Icon)}
                      <p>{name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>

            <div className="mb-4 border-b border-light-200/20 pt-4" />
            <DarkModeButton/>
            <div className="flex flex-col justify-between gap-5 pb-5">
              <FileUplodeader ownerId={ownerId} accountId={accountId} />
              <Button
                type="submit"
                className="mobile-sign-out-button"
                onClick={async () => await signOutUser()}
              >
                <Image
                  src="/assets/icons/logout.svg"
                  alt="logo"
                  width={24}
                  height={24}
                />
                <p>Logout</p>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </header>
  );
};

export default MobileNav;
