"use client";

import { dropDownOptionType, NavDropdown } from "@/components/ui/NavDropdown";
import { RiArrowDownSLine, RiMenuLine, RiCloseLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type navBarOptionType = {
  label: string;
  href: string;
  dropdown: boolean;
  dropdownOptions?: dropDownOptionType[];
};

const navBaroptions: navBarOptionType[] = [
  {
    label: "Home",
    href: "/",
    dropdown: false,
  },
  {
    label: "Company",
    href: "/company",
    dropdown: true,
    dropdownOptions: [
      {
        label: "Our Team",
        href: "/company/our-team",
      },
      {
        label: "Achievements",
        href: "/company/achievements",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: true,
    dropdownOptions: [
      {
        label: "Specialized Services",
        href: "/services/specialized-services",
      },
      {
        label: "Auditing",
        href: "/services/auditing",
      },
      {
        label: "Corporate Compliance",
        href: "/services/corporate-compliance",
      },
      {
        label: "Tax Consultancy",
        href: "/services/tax-consultancy",
      },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    dropdown: true,
    dropdownOptions: [
      {
        label: "BUDGET Updates",
        href: "/publications/budget-updates",
      },
      {
        label: "GST",
        href: "/publications/gst",
      },
      {
        label: "Income TAX",
        href: "/publications/income-tax",
      },
    ],
  },
  {
    label: "Knowledge & Event",
    href: "/knowledge-events",
    dropdown: true,
    dropdownOptions: [
      {
        label: "Event",
        href: "/knowledge-events",
      },
      {
        label: "Blogs",
        href: "/knowledge-events/blogs",
      },
      {
        label: "Careers",
        href: "/knowledge-events/careers",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    dropdown: false,
  },
];

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home" || pathname === "/contact" || pathname.startsWith("/services") || pathname.startsWith("/knowledge") || pathname.startsWith("/publications");

  return (
    <header 
      className={clsx(
        "absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isHome 
          ? "bg-transparent border-b border-white/10" 
          : "bg-white/85 backdrop-blur-md border-b border-gray-100/80 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className={clsx(
            "text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity",
            isHome 
              ? "text-white" 
              : "bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent"
          )}
        >
          YOUR COMPANY
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navBaroptions.map((option, idx) => {
            return <NavBarOption key={idx} {...option} isHome={isHome} />;
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className={clsx(
              "text-xs font-medium",
              isHome ? "text-white/70" : "text-gray-400"
            )}>
              Have any questions?
            </span>
            <a 
              href="tel:+190898718876" 
              className={clsx(
                "text-sm font-semibold transition-colors duration-200",
                isHome ? "text-white hover:text-white/80" : "text-gray-700 hover:text-primary"
              )}
            >
              +1 90898718876
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              "lg:hidden p-2 rounded-lg transition-colors",
              isHome 
                ? "text-white hover:text-white/80 hover:bg-white/10" 
                : "text-gray-500 hover:text-primary hover:bg-gray-50"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenuLine className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "lg:hidden fixed inset-x-0 top-[64px] sm:top-[80px] bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "max-h-[85vh] opacity-100 border-t border-gray-50" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
          {navBaroptions.map((option, idx) => (
            <MobileNavBarOption key={idx} {...option} onClose={() => setIsMobileMenuOpen(false)} />
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-1">
            <span className="text-xs text-gray-400 font-medium">Have any questions?</span>
            <a
              href="tel:+190898718876"
              className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors duration-200"
            >
              +1 90898718876
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavBarOption = ({
  label,
  href,
  dropdown,
  dropdownOptions,
  isHome,
}: navBarOptionType & { isHome: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const hideDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex items-center gap-1.5 relative py-2"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <Link 
        href={href} 
        className={clsx(
          "text-sm font-medium transition-colors duration-200",
          isHome 
            ? "text-white/80 hover:text-white" 
            : "text-gray-600 hover:text-primary"
        )}
      >
        {label}
      </Link>
      {dropdown && (
        <RiArrowDownSLine 
          className={clsx(
            "w-4 h-4 transition-transform duration-300 pointer-events-none",
            isHome 
              ? (isDropdownOpen ? "rotate-180 text-white" : "text-white/60")
              : (isDropdownOpen ? "rotate-180 text-primary" : "text-gray-400")
          )} 
        />
      )}
      {dropdownOptions && (
        <NavDropdown
          dropdownOptions={dropdownOptions}
          isDropdownOpen={isDropdownOpen}
        />
      )}
    </div>
  );
};

const MobileNavBarOption = ({
  label,
  href,
  dropdown,
  dropdownOptions,
  onClose,
}: navBarOptionType & { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-2">
        <Link
          href={href}
          onClick={onClose}
          className="text-base font-semibold text-gray-800 hover:text-primary transition-colors duration-200"
        >
          {label}
        </Link>
        {dropdown && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md text-gray-400 hover:text-primary hover:bg-gray-50 transition-colors"
          >
            <RiArrowDownSLine
              className={clsx(
                "w-5 h-5 transition-transform duration-300",
                isOpen && "transform rotate-180 text-primary"
              )}
            />
          </button>
        )}
      </div>

      {dropdown && dropdownOptions && (
        <div
          className={clsx(
            "pl-4 border-l border-gray-100 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100 mt-1 mb-2" : "max-h-0 opacity-0"
          )}
        >
          {dropdownOptions.map((option, idx) => (
            <Link
              key={idx}
              href={option.href}
              onClick={onClose}
              className="py-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
