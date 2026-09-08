import { useEffect, useRef, useState } from "react";
import {
    IoSchool,
    IoSparklesSharp,
    IoLocationSharp,
} from "react-icons/io5";
import { BsDot } from "react-icons/bs";

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Setelah muncul sekali, observer dihentikan
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative overflow-hidden py-28"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/*HEADING*/}

                <div
                    className={`mb-14 max-w-2xl transform transition-all duration-700 ease-out ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                        }`}
                >
                    <p className="mb-3 text-sm font-semibold tracking-wide text-[#f07fe1]">
                        About Me
                    </p>

                    <h2 className="font-[Berkshire_Swash] text-4xl font-bold tracking-tight text-[#303653] sm:text-5xl">
                        A little bit about me.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#777d92]">
                        Mengenal sedikit tentang latar belakang, ketertarikan,
                        dan hal-hal yang saya pelajari selama kuliah.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* DESCRIPTION */}
                    <div
                        className={`rounded-3xl border border-white/70 bg-white/45 p-8 shadow-xl shadow-purple-100/30 backdrop-blur-xl transition-all duration-700 ease-out sm:p-10 ${isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-10 opacity-0"
                            }`}
                    >
                        <p className="text-[15px] leading-8 text-[#73798f]">
                            Saya merupakan lulusan S1 Sistem Informasi yang memiliki
                            ketertarikan pada pengembangan web, analisis sistem, dan
                            UI/UX Design.
                        </p>

                        <p className="mt-5 text-[15px] leading-8 text-[#73798f]">
                            Selama kuliah, saya mendapatkan pengalaman melalui
                            berbagai proyek dan kegiatan yang membantu saya memahami
                            proses perancangan hingga pengembangan sistem.
                        </p>

                        <p className="mt-5 text-[15px] leading-8 text-[#73798f]">
                            Saya juga memiliki pengalaman menggunakan Laravel, React,
                            dan Figma dalam beberapa proyek. Saya senang mempelajari
                            teknologi baru dan mencoba menerapkannya dalam proyek
                            yang saya kerjakan.
                        </p>
                    </div>

                    {/* INFORMATION */}
                    <div className="space-y-5">

                        {/* EDUCATION */}
                        <div
                            className={`rounded-3xl border border-white/70 bg-white/45 p-6 shadow-xl shadow-purple-100/20 backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1 ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                                }`}
                            style={{ transitionDelay: "150ms" }}
                        >
                            <div className="flex gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-100/80 text-lg">
                                    <IoSchool className="text-2xl text-gray-950" />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-[#999daf]">
                                        Education
                                    </p>

                                    <h3 className="mt-1 text-sm font-semibold text-[#454c69]">
                                        S1 Sistem Informasi{" "}
                                        <BsDot className="inline" /> IPK 3.81
                                    </h3>

                                    <p className="mt-1 text-xs text-[#83889a]">
                                        Universitas Mercu Buana Yogyakarta
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* INTEREST */}
                        <div
                            className={`rounded-3xl border border-white/70 bg-white/45 p-6 shadow-xl shadow-purple-100/20 backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1 ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                                }`}
                            style={{ transitionDelay: "300ms" }}
                        >
                            <div className="flex gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100/70 text-lg">
                                    <IoSparklesSharp className="text-2xl text-yellow-500" />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-[#999daf]">
                                        Interested in
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-2">

                                        <span className="rounded-full bg-purple-100/80 px-3 py-1.5 text-[10px] font-medium text-[#77709a]">
                                            Web Development
                                        </span>

                                        <span className="rounded-full bg-pink-100/70 px-3 py-1.5 text-[10px] font-medium text-[#8b7185]">
                                            UI/UX Design
                                        </span>

                                        <span className="rounded-full bg-blue-100/70 px-3 py-1.5 text-[10px] font-medium text-[#687593]">
                                            System Analysis
                                        </span>

                                        <span className="rounded-full bg-green-100/70 px-3 py-1.5 text-[10px] font-medium text-[#687593]">
                                            Creative Design
                                        </span>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* LOCATION */}
                        <div
                            className={`rounded-3xl border border-white/70 bg-white/45 p-6 shadow-xl shadow-purple-100/20 backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1 ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                                }`}
                            style={{ transitionDelay: "450ms" }}
                        >
                            <div className="flex gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pink-100/70 text-lg">
                                    <IoLocationSharp className="text-2xl text-red-500" />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-[#999daf]">
                                        Location
                                    </p>

                                    <h3 className="mt-1 text-sm font-semibold text-[#454c69]">
                                        Sleman, Yogyakarta, Indonesia
                                    </h3>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;