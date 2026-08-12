import React from "react";
import clsx from "clsx";

type InputProps = {
  label?: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
};

export const Input = ({
  label,
  type = "text",
  placeholder,
  options = [],
  name,
  value,
  onChange,
  required = false,
}: InputProps) => {
  const baseClasses = "w-full bg-white border border-slate-200 px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-xs";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-semibold text-slate-700 tracking-wide">
          {label}
        </label>
      )}
      
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={clsx(baseClasses, "resize-none rounded-xl")}
        />
      ) : type === "select" ? (
        <div className="relative w-full">
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={clsx(
              baseClasses, 
              "rounded-xl appearance-none pr-10 bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%20fill%3D%22none%22%20stroke%3D%22%234F46E5%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1.25rem_center] bg-no-repeat cursor-pointer"
            )}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={clsx(baseClasses, "rounded-xl")}
        />
      )}
    </div>
  );
};
