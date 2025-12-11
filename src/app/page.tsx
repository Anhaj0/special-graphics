"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the 3 Testimonial Slides
  const testimonials = [
    {
      id: 1,
      productImg: "/special-graphics/testimonial-slide-1.avif",
      avatarImg: "/special-graphics/avatar-richard.avif",
      name: "Richard Van Balen",
      role: "Founder of Ethique Body, Florida",
      quote:
        "Special Graphics is a platform with a good name and a very good service...",
    },
    {
      id: 2,
      productImg: "/special-graphics/testimonial-slide-2.avif",
      avatarImg: "/special-graphics/avatar-ryan.avif",
      name: "Ryan Spalding",
      role: "Founder of Jedi Mind Tricks, Texas",
      quote:
        "Special Graphics is a platform with a good name and a very good service...",
    },
    {
      id: 3,
      productImg: "/special-graphics/testimonial-slide-3.avif",
      avatarImg: "/special-graphics/avatar-masoud.avif",
      name: "Masoud Pajouh",
      role: "Founder of Dibaonline.de & Diba Products, Germany",
      quote:
        "Special Graphics is a platform with a good name and a very good service...",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const hexImages = Array.from(
    { length: 8 },
    (_, i) => `/special-graphics/feature-logos-hex-${i + 1}.avif`
  );
  const offsetIndexes = [1, 4, 7];

  return (
    <main className="font-sans text-slate-800 bg-white">
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0a0015] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center z-10">
        {/* Background - Left Image */}
        <div className="absolute left-0 top-0 w-full md:w-2/3 h-full z-0">
          <Image
            src="/special-graphics/hero-left.avif"
            alt="Hero Left Background"
            fill
            className="object-cover object-left"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0015] w-full h-full" />
        </div>

        {/* Background - Right Image */}
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full z-0">
          <Image
            src="/special-graphics/hero-right.avif"
            alt="Hero Right Background"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0015] w-full h-full" />
        </div>

        {/* Dark overlay for mobile */}
        <div className="absolute inset-0 bg-[#0a0015]/40 md:bg-transparent z-0 pointer-events-none" />

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center pt-10 pb-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Start Your Dream Business with <br />
            <span className="text-white">World Class Designs</span>
          </h1>

          <p className="text-gray-200 mb-8 max-w-2xl text-base md:text-lg drop-shadow-md">
            No matter what your business needs, we can connect you with a
            creative expert. What do you need to design?
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 text-sm text-gray-300">
            <span className="py-1">Popular :</span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-yellow-100 border border-yellow-500/30">
              Brand Design
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-yellow-100 border border-yellow-500/30">
              Web Design
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-yellow-100 border border-yellow-500/30">
              Package Design
            </span>
          </div>

          <button className="bg-[#ff00cc] hover:bg-[#d900ad] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded shadow-[0_0_20px_rgba(255,0,204,0.4)] transition-all">
            Hire Us Now!
          </button>
        </div>

        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 w-full h-16 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full absolute bottom-0 translate-y-1/2"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="py-16 md:py-20 bg-white relative z-30">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
              Design for what you need
            </h2>

            <div className="flex-1 max-w-xl w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="what do you need designed?"
                  className="w-full border border-gray-300 py-3 px-4 rounded pr-12 text-sm focus:outline-none focus:border-pink-500"
                />
                <button className="absolute right-0 top-0 h-full px-4 border-l border-gray-300 hover:bg-gray-50">
                  <Search size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            <Link
              href="/categories"
              className="text-sm text-gray-500 hover:text-pink-600 whitespace-nowrap"
            >
              View all design categories
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { title: "Logo & Branding Design", img: "/special-graphics/cat-logo.avif" },
              { title: "Business & Advertising", img: "/special-graphics/cat-business.avif" },
              { title: "Packaging & Label", img: "/special-graphics/cat-package.avif" },
              { title: "Website & App Design", img: "/special-graphics/cat-web.avif" },
              { title: "Art & Illustration", img: "/special-graphics/cat-art.avif" },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 overflow-hidden rounded-md mb-3 shadow-sm group-hover:shadow-md transition-all">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-bold text-center text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURE 1 ================= */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#222] leading-tight">
              Work with <br /> creative experts <br /> you can trust
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Feel confident working with our designer community. All our
              designers are vetted creative experts who&apos;ve worked with
              hundreds of businesses to bring their designs to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-4">
              <button className="bg-[#333] hover:bg-black text-white px-6 py-3 rounded text-sm font-medium transition-colors">
                Logo & Branding Design
              </button>
              <a
                href="#"
                className="text-gray-600 hover:text-black font-medium text-sm"
              >
                Start Your Project Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 flex justify-center">
              <Image
                src="/special-graphics/feature-energy.avif"
                alt="Energy Drink Design"
                width={600}
                height={500}
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE 2: HEX LOGOS ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Hex grid */}
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-3 gap-4 md:gap-5">
              {hexImages.map((src, idx) => (
                <div
                  key={src}
                  className={`relative w-24 h-28 md:w-32 md:h-36 ${offsetIndexes.includes(idx) ? "mt-6 md:mt-8" : ""
                    }`}
                >
                  <div
                    className="w-full h-full overflow-hidden shadow-md bg-white"
                    style={{
                      clipPath:
                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Logo hex ${idx + 1}`}
                      width={300}
                      height={340}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#a35d8d] leading-tight">
              Work with <br /> creative experts <br /> you can trust
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Feel confident working with our designer community. All our
              designers are vetted creative experts who&apos;ve worked with
              hundreds of businesses to bring their designs to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-4">
              <button className="bg-[#a35d8d] hover:bg-[#8e4a7a] text-white px-6 py-3 rounded text-sm font-medium transition-colors">
                Logo & Branding Design
              </button>
              <a
                href="#"
                className="text-gray-600 hover:text-black font-medium text-sm"
              >
                Start Your Project Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE 3 ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#4285f4] leading-tight">
              Your business <br /> deserves great <br /> design!
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Logos, websites, packaging design and more. Our trusted designer
              community has helped thousands of businesses launch, grow, expand
              and rebrand with custom, professional design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-4">
              <button className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-8 py-3 rounded text-sm font-medium transition-colors">
                Showcase
              </button>
              <a
                href="#"
                className="text-gray-600 hover:text-black font-medium text-sm"
              >
                Start Your Brand
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <Image
              src="/special-graphics/feature-podcast.avif"
              alt="Podcast Design"
              width={500}
              height={500}
              className="w-full max-w-md h-auto shadow-xl rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL CAROUSEL ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 min-h-[400px]">
            {/* Left: Product Image */}
            <div className="lg:w-1/2 flex justify-center relative w-full">
              <div className="absolute inset-0 bg-gray-50 rounded-full opacity-50 blur-3xl scale-90"></div>
              <div className="relative h-[400px] w-full flex items-center justify-center">
                <Image
                  key={`prod-${currentSlide}`}
                  src={testimonials[currentSlide].productImg}
                  alt="Product"
                  width={500}
                  height={600}
                  className="relative z-10 w-auto h-full max-h-[400px] object-contain animate-in fade-in duration-500"
                />
              </div>
            </div>

            {/* Right: Quote & Info */}
            <div className="lg:w-1/2 relative w-full">
              <span className="text-[#e85a4f] text-6xl font-serif absolute -top-8 -left-4">
                “
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8 pl-8">
                {testimonials[currentSlide].quote}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-10 pl-8 border-l-4 border-transparent">
                where entrepreneurs can easily find the right design for their
                company. The book cover for us was a very important part of the
                success of the book. Therefore, we entrusted this to experts and
                ended up being very happy with the result."
              </p>

              <div className="flex items-center gap-4 pl-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    key={`avatar-${currentSlide}`}
                    src={testimonials[currentSlide].avatarImg}
                    alt={testimonials[currentSlide].name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="animate-in slide-in-from-right-2 duration-300">
                  <p className="font-bold text-gray-800 text-sm">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-gray-400 text-xs italic">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft
              size={40}
              className="text-gray-400 font-thin hover:text-gray-800"
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight
              size={40}
              className="text-gray-400 font-thin hover:text-gray-800"
            />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "bg-black scale-110"
                  : "bg-transparent border border-black hover:bg-gray-200"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
