import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "text" | "dark-outline" | "gradient" | "teal";
  className?: string;
  children: React.ReactNode;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "inline-flex items-center justify-center transition-all duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm select-none rounded-xl active:scale-98 cursor-pointer",
    
    variant === "primary" && "bg-primary hover:bg-indigo-700 text-white px-8 py-4 shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] hover:-translate-y-0.5",
    variant === "gradient" && "bg-gradient-to-r from-primary to-secondary hover:from-indigo-600 hover:to-teal-600 text-white px-8 py-4 shadow-[0_4px_14px_rgba(79,70,229,0.25)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.35)] hover:-translate-y-0.5",
    variant === "teal" && "bg-secondary hover:bg-teal-700 text-white px-8 py-4 shadow-[0_4px_14px_rgba(13,148,136,0.3)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.4)] hover:-translate-y-0.5",
    variant === "outline" && "border-2 border-white/95 text-white hover:bg-white hover:text-slate-900 bg-transparent px-10 py-4 tracking-[0.25em] hover:border-white shadow-sm hover:-translate-y-0.5",
    variant === "dark-outline" && "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent px-10 py-4 tracking-[0.25em] hover:-translate-y-0.5",
    variant === "text" && "text-slate-900 hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-slate-100/50",
    
    className
  );

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
