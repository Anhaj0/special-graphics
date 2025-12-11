"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-[#0a0015] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center z-10">

            {/* Background - Left Image (Fades to right) */}
            <div className="absolute left-0 top-0 w-full md:w-2/3 h-full z-0">
                <Image
                    src="/hero-left.avif"
                    alt="Hero Left Background"
                    fill
                    className="object-cover object-left"
                    priority
                />
                {/* Gradient Mask to fade into center */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0015] w-full h-full"></div>
            </div>

            {/* Background - Right Image (Fades to left) */}
            <div className="absolute right-0 top-0 w-full md:w-2/3 h-full z-0">
                <Image
                    src="/hero-right.avif"
                    alt="Hero Right Background"
                    fill
                    className="object-cover object-right"
                    priority
                />
                {/* Gradient Mask to fade into center */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0015] w-full h-full"></div>
            </div>

            {/* Dark overlay for mobile readability */}
            <div className="absolute inset-0 bg-[#0a0015]/40 md:bg-transparent z-0 pointer-events-none"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center pt-10 pb-32">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Start Your Dream Business with <br />
                    <span className="text-white">World Class Designs</span>
                </h1>

                <p className="text-gray-200 mb-8 max-w-2xl text-base md:text-lg drop-shadow-md">
                    No matter what your business needs, we can connect you with a creative expert. What do you need to design?
                </p>

                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 text-sm text-gray-300">
                    <span className="py-1">Popular :</span>
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-yellow-100 border border-yellow-500/30">Brand Design</span>
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-yellow-100 border border-yellow-500/30">Web Design</span>
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-yellow-100 border border-yellow-500/30">Package Design</span>
                </div>

                <button className="bg-[#ff00cc] hover:bg-[#d900ad] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded shadow-[0_0_20px_rgba(255,0,204,0.4)] transition-all cursor-pointer">
                    Hire Us Now!
                </button>
            </div>

            {/* Decorative Wave Bottom */}
            <div className="absolute bottom-0 w-full h-16 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full absolute bottom-0 translate-y-1/2">
                    <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}
