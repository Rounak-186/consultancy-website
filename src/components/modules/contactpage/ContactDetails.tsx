import Image from "next/image";

export default function FindAccountant() {
  return (
    <section className="w-full flex justify-center py-16 sm:py-24 bg-slate-50/50">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100/80">
          
          {/* Left Image */}
          <div className="relative w-full lg:w-1/2 h-105 sm:h-130 lg:h-155 shrink-0">
            <Image
              src="/assets/contact-page.png"
              alt="Accounting Team"
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:w-1/2 bg-[#FBFBFB]">
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
              Professional Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              Find a Chartered Accountant
            </h2>

            <div className="relative pl-6 border-l-4 border-primary">
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed italic font-medium">
                "If you're thinking of using the services of an accountant you
                should look for someone who has a professional qualification;
                always check what qualifications and experience they have.
                Appointing an ICAEW Chartered Accountant or regulated firm will
                ensure you get someone who is qualified, committed and
                accountable."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}