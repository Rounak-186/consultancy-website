import React from "react";

export const WhoIAm = () => {
  return (
    <section className="bg-white py-32 lg:py-40 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            <div 
              className="absolute left-0 top-0 w-[90%] h-[90%] bg-cover bg-center opacity-15 grayscale pointer-events-none"
              style={{ backgroundImage: "url('/hero-image.png')" }}
            />
            
            <div className="relative z-10 w-[85%] ml-auto mt-auto bg-white p-4.5 shadow-xl border border-gray-100/50">
              <img 
                src="/hero-image.png" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-2 h-11 bg-primary/30 rounded-full" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 tracking-wide">
                WHO <strong className="font-extrabold text-slate-950">I AM</strong>
              </h2>
            </div>
            
            <div className="space-y-8 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                I'm a dedicated Chartered Accountant with a passion for helping individuals and businesses make smarter financial decisions. With years of experience in accounting, taxation, auditing, and financial consulting, I bring clarity to complex financial matters.I'm a dedicated Chartered Accountant with a passion for helping individuals and businesses make smarter financial decisions. With years of experience in accounting, taxation, auditing, and financial consulting, I bring clarity to complex financial matters.
              </p>
              <p>
                My mission is to provide accurate, timely, and personalized solutions tailored to each client's unique goals. Whether you're a startup, a growing business, or an individual seeking financial advice, I'm here to support your journey with integrity, transparency, and professionalism.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
