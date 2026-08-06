import clsx from "clsx";
import Link from "next/link";
import React from "react";

export type dropDownOptionType = {
  label: string;
  href: string;
};

export const NavDropdown = ({
  dropdownOptions,
  isDropdownOpen,
}: {
  dropdownOptions: dropDownOptionType[];
  isDropdownOpen: boolean;
}) => {
  return (
    <div
      className={clsx(
        "p-2 bg-white rounded-xl flex flex-col gap-1 absolute top-full left-0 mt-2 min-w-[240px] shadow-xl border border-gray-100/60 z-50 origin-top-left",
        "transition-all duration-300 ease-in-out",
        isDropdownOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
      )}
    >
      {dropdownOptions.map((option, index) => {
        return (
          <Link
            key={index}
            href={option.href}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
};
