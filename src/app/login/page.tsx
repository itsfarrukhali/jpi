"use client";

import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/brand/jpi-logo-tp.png"
              alt="Jinnah Polytechnic Institute"
              width={270}
              height={40}
              loading="eager"
              className="h-auto w-45 sm:w-55 md:w-67.5 lg:w-75"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/brand/jpi-building.jpeg"
          alt="Image"
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
