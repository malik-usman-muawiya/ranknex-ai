"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { KeyRound, AlertCircle, Loader2, Lock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SignInData {
  username: string;
  password: string;
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInData) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMsg("Invalid username or password. Please check your credentials.");
        setIsSubmitting(false);
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F0FDFD] via-white to-[#E6FAF8] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle ambient glowing orbs */}
      <div className="absolute w-96 h-96 -top-48 -right-24 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 bottom-12 -left-36 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xl relative z-10 space-y-8">
        {/* Branding header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2.5 justify-center group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-mark.webp"
                alt="RankNex AI Logo"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className="font-bold text-navy-950 font-heading text-2xl tracking-tight">
              RankNex AI
            </span>
          </Link>
          <div className="space-y-1">
            <h1 className="text-xl font-bold font-heading text-navy-950">
              Admin Portal
            </h1>
            <p className="text-slate-500 text-xs">
              Enter your admin credentials to access the management dashboard.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="username"
                {...register("username", { required: "Username is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 pl-10 pr-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.username ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="admin"
                disabled={isSubmitting}
              />
            </div>
            {errors.username && (
              <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className={`w-full bg-slate-50 border rounded-xl py-3 pl-10 pr-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  errors.password ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-teal-500"
                }`}
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>
            {errors.password && (
              <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.password.message}
              </p>
            )}
          </div>

          {/* General Error Alert */}
          {errorMsg && (
            <div className="flex items-center gap-2.5 bg-rose-50 border border-rose-200 text-rose-700 p-3.5 rounded-xl text-xs font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 cursor-pointer disabled:opacity-50 text-sm font-bold shadow-md shadow-teal-500/10"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Sign In to Dashboard</span>
              </>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="text-center pt-2 border-t border-slate-100">
          <Link href="/" className="text-slate-500 hover:text-teal-600 text-xs font-semibold transition-colors">
            ← Return to public website
          </Link>
        </div>
      </div>
    </main>
  );
}
