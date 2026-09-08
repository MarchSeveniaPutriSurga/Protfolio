import { useEffect, useRef, useState } from "react";
import DecayCard from "./DecayCard";

function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main
            id="home"
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden"
        >

            {/* BACKGROUND BLOBS */}
            <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-purple-200/25 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

            <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-pink-200/20 blur-3xl" />

            {/* CONTENT */}
            <section
                className="
                    relative
                    mx-auto
                    flex
                    min-h-screen
                    max-w-6xl
                    items-center
                    px-5
                    pb-16
                    pt-28

                    sm:px-8
                    sm:pt-32

                    md:pt-28

                    lg:px-10
                "
            >
                <div
                    className="
                        grid
                        w-full
                        items-center
                        gap-12

                        md:grid-cols-[1.1fr_0.9fr]
                        md:gap-10

                        lg:gap-16
                    "
                >

                    {/* TEXT */}
                    <div
                        className="
                            max-w-xl
                            text-center
                            md:text-left
                        "
                    >
                        {/* Hello */}
                        <p
                            className={`
                                mb-3
                                transform
                                text-sm
                                font-semibold
                                tracking-wide
                                text-[#f07fe1]
                                transition-all
                                duration-700
                                ease-out

                                ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                                }
                            `}
                        >
                            Hello, I'm
                        </p>

                        {/* Name */}
                        <h1
                            className={`
                                transform
                                font-[Berkshire_Swash]
                                text-5xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-[#303653]
                                transition-all
                                duration-900
                                ease-out

                                sm:text-6xl

                                md:text-7xl

                                ${isVisible
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-8 opacity-0"
                                }
                            `}
                            style={{
                                transitionDelay: "100ms",
                            }}
                        >
                            Sevenia
                            <span className="text-[#f07fe1]">
                                .
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <h2
                            className={`
                                mt-3
                                transform
                                text-lg
                                font-medium
                                leading-relaxed
                                text-[#525a77]
                                transition-all
                                duration-800
                                ease-out

                                sm:mt-4
                                sm:text-2xl

                                ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                }
                            `}
                            style={{
                                transitionDelay: "250ms",
                            }}
                        >
                            Information Systems Graduate
                        </h2>

                        {/* Description */}
                        <p
                            className={`
                                mx-auto
                                mt-4
                                max-w-lg
                                transform
                                text-sm
                                leading-7
                                text-[#777d92]
                                transition-all
                                duration-800
                                ease-out

                                sm:mt-5
                                sm:text-base
                                sm:leading-8

                                md:mx-0

                                ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                }
                            `}
                            style={{
                                transitionDelay: "400ms",
                            }}
                        >
                            Fresh graduate Sistem Informasi yang
                            tertarik pada pengembangan web, analisis
                            sistem, dan UI/UX Design. Senang mempelajari
                            hal baru dan mengembangkan ide menjadi
                            website yang fungsional dan nyaman digunakan.
                        </p>

                        {/* BUTTONS */}
                        <div
                            className={`
                                mt-6
                                flex
                                flex-wrap
                                justify-center
                                gap-3
                                transform
                                transition-all
                                duration-800
                                ease-out

                                sm:mt-7

                                md:justify-start

                                ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                }
                            `}
                            style={{
                                transitionDelay: "550ms",
                            }}
                        >
                            <a
                                href="#projects"
                                className="
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-[#f07fe1]
                                    to-[#d96fcb]
                                    px-5
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-purple-200/40
                                    transition
                                    duration-300
                                    hover:-translate-y-1

                                    sm:px-6
                                    sm:text-sm
                                "
                            >
                                View My Projects
                            </a>

                            <a
                                href="#contact"
                                className="
                                    rounded-xl
                                    border
                                    border-[#ddd8f0]
                                    bg-white/50
                                    px-5
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-[#7468a5]
                                    backdrop-blur-sm
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/80

                                    sm:px-6
                                    sm:text-sm
                                "
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* PHOTO */}
                    <div
                        className={`
                            relative
                            flex
                            justify-center
                            transform
                            transition-all
                            duration-1000
                            ease-out

                            md:justify-end
                            md:pr-[50px]
                            md:-translate-y-[40px]

                            ${isVisible
                                ? "translate-x-0 scale-100 opacity-100"
                                : "translate-x-12 scale-95 opacity-0"
                            }
                        `}
                        style={{
                            transitionDelay: "250ms",
                        }}
                    >
                        {/* MOBILE */}
                        <div className="block md:hidden">
                            <DecayCard
                                width={250}
                                height={375}
                                image="/images/me2.jpeg"
                            />
                        </div>

                        {/* DESKTOP */}
                        <div className="hidden md:block">
                            <DecayCard
                                width={300}
                                height={450}
                                image="/images/me2.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;