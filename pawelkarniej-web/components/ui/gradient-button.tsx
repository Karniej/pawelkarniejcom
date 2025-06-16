/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type GradientVariant = "primary" | "secondary" | "accent";

const gradientVariants: Record<GradientVariant, string> = {
  primary: "from-white via-gray-200 to-gray-300",
  secondary: "from-gray-400 via-zinc-300 to-slate-400",
  accent: "from-emerald-400 via-emerald-300 to-emerald-500",
};

interface GradientButtonProps {
  variant?: GradientVariant;
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
}

const GradientButton = ({
  variant = "primary",
  children,
  href,
  className,
  onClick,
  icon: Icon,
  iconPosition = "right",
  size = "md",
}: GradientButtonProps) => {
  const gradient = gradientVariants[variant];

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const ButtonContent = () => (
    <>
      {Icon && iconPosition === "left" && (
        <Icon
          className={cn(
            "mr-2",
            size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          )}
        />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon
          className={cn(
            "ml-2",
            size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
          )}
        />
      )}
    </>
  );

  const ButtonElement = (
    <div className="relative group inline-flex hover:scale-105 transition-transform duration-200">
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md",
          gradient,
        )}
      />
      {/* Button */}
      <div
        className={cn(
          "relative rounded-full bg-white text-black font-medium flex items-center justify-center transition-all duration-300 group-hover:bg-gray-50 cursor-pointer",
          sizeClasses[size],
          className,
        )}
      >
        <ButtonContent />
      </div>
    </div>
  );

  // Dark variant for secondary styling
  const DarkButtonElement = (
    <div className="relative group inline-flex hover:scale-105 transition-transform duration-200">
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md",
          gradient,
        )}
      />
      {/* Button */}
      <div
        className={cn(
          "relative rounded-full bg-zinc-900/90 backdrop-blur-sm text-white font-medium flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-800/90 border border-white/10 cursor-pointer",
          sizeClasses[size],
          className,
        )}
      >
        <ButtonContent />
      </div>
    </div>
  );

  const element = className?.includes("dark")
    ? DarkButtonElement
    : ButtonElement;

  // If it's a link, use div elements inside Link/a tags
  if (href) {
    // Check if it's an external link (starts with http/https or mailto)
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("#");

    if (isExternal) {
      return (
        <a
          href={href}
          className="inline-flex"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {element}
        </a>
      );
    }

    // Use Next.js Link for internal navigation
    return (
      <Link href={href} className="inline-flex">
        {element}
      </Link>
    );
  }

  // If it's a button with onClick, use button elements
  const ClickableButtonElement = (
    <div className="relative group inline-flex hover:scale-105 transition-transform duration-200">
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md",
          gradient,
        )}
      />
      {/* Button */}
      <button
        onClick={onClick}
        className={cn(
          "relative rounded-full bg-white text-black font-medium flex items-center justify-center transition-all duration-300 group-hover:bg-gray-50",
          sizeClasses[size],
          className,
        )}
      >
        <ButtonContent />
      </button>
    </div>
  );

  const ClickableDarkButtonElement = (
    <div className="relative group inline-flex hover:scale-105 transition-transform duration-200">
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md",
          gradient,
        )}
      />
      {/* Button */}
      <button
        onClick={onClick}
        className={cn(
          "relative rounded-full bg-zinc-900/90 backdrop-blur-sm text-white font-medium flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-800/90 border border-white/10",
          sizeClasses[size],
          className,
        )}
      >
        <ButtonContent />
      </button>
    </div>
  );

  return className?.includes("dark")
    ? ClickableDarkButtonElement
    : ClickableButtonElement;
};

export { GradientButton };
