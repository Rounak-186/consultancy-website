import React from "react";
import Image from "next/image";

type BlogCardType = {
  title: string;
  summary: string;
  dateMeta: string;
};

const blogList: BlogCardType[] = [
  {
    title: "DEMATERIALIZATION OF SHARES: A STEP-BY-STEP GUIDE FOR COMPANIES & SHAREHOLDERS",
    summary: "Step-by-Step Guide to Dematerialization of Physical Shares",
    dateMeta: "May 8, 2023 | Blog, Business",
  },
  {
    title: "DEMATERIALIZATION OF SHARES: A STEP-BY-STEP GUIDE FOR COMPANIES & SHAREHOLDERS",
    summary: "Step-by-Step Guide to Dematerialization of Physical Shares",
    dateMeta: "May 8, 2023 | Blog, Business",
  },
  {
    title: "DEMATERIALIZATION OF SHARES: A STEP-BY-STEP GUIDE FOR COMPANIES & SHAREHOLDERS",
    summary: "Step-by-Step Guide to Dematerialization of Physical Shares",
    dateMeta: "May 8, 2023 | Blog, Business",
  },
  {
    title: "DEMATERIALIZATION OF SHARES: A STEP-BY-STEP GUIDE FOR COMPANIES & SHAREHOLDERS",
    summary: "Step-by-Step Guide to Dematerialization of Physical Shares",
    dateMeta: "May 8, 2023 | Blog, Business",
  },
  {
    title: "DEMATERIALIZATION OF SHARES: A STEP-BY-STEP GUIDE FOR COMPANIES & SHAREHOLDERS",
    summary: "Step-by-Step Guide to Dematerialization of Physical Shares",
    dateMeta: "May 8, 2023 | Blog, Business",
  },
  {
    title: "DEMATERIALIZATION OF SHARES: A STEP-BY-STEP GUIDE FOR COMPANIES & SHAREHOLDERS",
    summary: "Step-by-Step Guide to Dematerialization of Physical Shares",
    dateMeta: "May 8, 2023 | Blog, Business",
  },
];

export default function BlogsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {blogList.map((blog, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
          >
            <div className="relative h-56 w-full shrink-0 overflow-hidden bg-slate-100">
              <Image
                src="/assets/blog-card.png"
                alt="Stock Dematerialization analytics dashboard"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-w-[768px]) 100vw, 33vw"
              />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2 uppercase tracking-wide leading-snug mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                  {blog.summary}
                </p>
              </div>

              <div className="border-t border-slate-50 pt-4 flex flex-col gap-2">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400">
                  {blog.dateMeta}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
