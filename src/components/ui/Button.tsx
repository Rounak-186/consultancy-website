import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "outline" | "text" | "dark-outline";
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "inline-flex items-center justify-center transition-all duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm select-none",
    variant === "primary" && "bg-primary hover:bg-primary/90 text-white px-8 py-4 shadow-md",
    variant === "outline" && "border border-white/80 text-white hover:bg-white hover:text-slate-900 bg-transparent px-10 py-4.5 tracking-[0.25em] hover:border-white shadow-sm",
    variant === "dark-outline" && "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent px-10 py-4.5 tracking-[0.25em]",
    variant === "text" && "text-slate-950 hover:text-primary transition-colors py-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as any)}>
      {children}
    </button>
  );
};
