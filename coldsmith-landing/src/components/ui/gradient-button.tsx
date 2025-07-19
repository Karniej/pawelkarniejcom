/** @format */

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  disabled = false,
}) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed",
    variant === "primary" &&
      "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25",
    variant === "secondary" &&
      "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border border-slate-500/50",
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};
