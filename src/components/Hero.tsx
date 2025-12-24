'use client';

import Image from "next/image";
import heroLeft from "../../public/hero-left.avif";
import heroRight from "../../public/hero-right.avif";

export default function Hero() {
    return (
        <section className="relative bg-[#000000] text-white overflow-hidden min-h-[550px] md:min-h-[650px] flex items-center z-10">

            {/* Left Image */}
            <div className="absolute left-0 top-0 bottom-0 w-[35%] z-0 hidden lg:block">
                <Image
                    src={heroLeft}
                    alt="Hero Left Decoration"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>

            {/* Right Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[40%] z-0 hidden lg:block">
                <Image
                    src={heroRight}
                    alt="Hero Right Decoration"
                    fill
                    className="object-contain object-right"
                    priority
                />
            </div>

            {/* Dark overlay for mobile / Gradient fade for center */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black z-0 lg:hidden"></div>
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                <div className="max-w-3xl">
                    <p className="text-xl md:text-2xl font-normal mb-2 text-white/90">
                        Start Your Dream Business with
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                        World Class <br /> Designs
                    </h1>

                    <div className="space-y-4 mb-10">
                        <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
                            No matter what your business needs, we can connect you with a creative expert. What do you need to design?
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base text-gray-400">
                            <span className="font-semibold text-white/70">Popular :</span>
                            <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">Brand Design</button>
                            <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">Web Design</button>
                            <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">Package Design</button>
                        </div>
                    </div>

                    <button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-bold py-4 px-12 rounded-sm text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95">
                        Hire Us Now!
                    </button>
                </div>
            </div>

            {/* Bottom Curve Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
        </section>
    );
}

