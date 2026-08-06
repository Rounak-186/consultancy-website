import Image from "next/image";

export default function MapBanner() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] overflow-hidden rounded-3xl shadow-2xl border border-gray-100/50 group">
          <Image
            src="/assets/location.png" 
            alt="Google Map Location Banner"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="100vw"
          />
          
          {/* Decorative Overlay Card with Address details */}
          <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-sm bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/40 z-10 hover:-translate-y-1 transition-transform duration-300">
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">
              Headquarters
            </span>
            <h4 className="text-xl font-extrabold text-indigo-950 mb-2">Our Corporate Office</h4>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Visit our headquarters or reach us by mail. We look forward to meeting with you.
            </p>
            <div className="border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-400 font-medium block mb-1">Office Location</span>
              <p className="text-sm font-semibold text-gray-800">416 Churchill Rd, Kilburn 5082</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}