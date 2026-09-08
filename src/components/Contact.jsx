import { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
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
        <>
            <section
                id="contact"
                ref={sectionRef}
                className="relative overflow-hidden py-28"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <div
                        className={`relative overflow-hidden rounded-[32px] border border-white/70 bg-white/45 px-8 py-16 text-center shadow-xl shadow-purple-100/20 backdrop-blur-xl transition-all duration-1000 ease-out sm:px-12 ${isVisible
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-8 scale-[0.98] opacity-0"
                            }`}
                    >
                        {/* Decorative blobs */}
                        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                        <div className="relative">

                            {/* Label */}
                            <p
                                className={`mb-3 transform text-sm font-semibold tracking-wide text-[#f07fe1] transition-all duration-700 ease-out ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                                    }`}
                            >
                                Contact
                            </p>

                            {/* Heading */}
                            <h2
                                className={`transform font-[Berkshire_Swash] text-4xl font-bold tracking-tight text-[#303653] transition-all duration-800 ease-out sm:text-5xl ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                    }`}
                                style={{ transitionDelay: "150ms" }}
                            >
                                Let's get in touch.
                            </h2>

                            {/* Description */}
                            <p
                                className={`mx-auto mt-5 max-w-xl transform text-sm leading-7 text-[#777d92] transition-all duration-800 ease-out ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                    }`}
                                style={{ transitionDelay: "300ms" }}
                            >
                                Terbuka untuk ide baru, kolaborasi, maupun
                                kesempatan menarik lainnya. Jika ingin terhubung,
                                kamu bisa menemukan saya melalui kontak di bawah ini.
                            </p>

                            {/* Contact Links */}
                            <div className="mt-9 flex flex-wrap justify-center gap-3">

                                {/* Email */}
                                <a
                                    href="mailto:putrisurgamarch@email.com"
                                    className={`flex transform items-center gap-2 rounded-xl border border-[#e3dff0] bg-white/60 px-5 py-3 text-sm font-medium text-[#686f87] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/80 hover:text-[#d56bc7] ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-5 opacity-0"
                                        }`}
                                    style={{ transitionDelay: "450ms" }}
                                >
                                    <FiMail className="text-base" />
                                    Email
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/6282329659341"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex transform items-center gap-2 rounded-xl border border-[#e3dff0] bg-white/60 px-5 py-3 text-sm font-medium text-[#686f87] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/80 hover:text-[#d56bc7] ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-5 opacity-0"
                                        }`}
                                    style={{ transitionDelay: "500ms" }}
                                >
                                    <FaWhatsapp className="text-base" />
                                    WhatsApp
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/sevenia-putri/"
                                    className={`flex transform items-center gap-2 rounded-xl border border-[#e3dff0] bg-white/60 px-5 py-3 text-sm font-medium text-[#686f87] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/80 hover:text-[#d56bc7] ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-5 opacity-0"
                                        }`}
                                    style={{ transitionDelay: "550ms" }}
                                >
                                    <FaLinkedinIn className="text-sm" />
                                    LinkedIn
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/MarchSeveniaPutriSurga"
                                    className={`flex transform items-center gap-2 rounded-xl border border-[#e3dff0] bg-white/60 px-5 py-3 text-sm font-medium text-[#686f87] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/80 hover:text-[#d56bc7] ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-5 opacity-0"
                                        }`}
                                    style={{ transitionDelay: "650ms" }}
                                >
                                    <FaGithub className="text-sm" />
                                    GitHub
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mx-auto flex w-[calc(100%-32px)] max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#e7e4ef] py-7 text-xs text-[#999daf] sm:w-[calc(100%-48px)] sm:flex-row">
                <span className="font-semibold text-[#646b84]">
                    Sevenia<span className="text-[#947ff0]">.</span>
                </span>

                <span>
                    © 2026 Sevenia. All rights reserved.
                </span>
            </footer>
        </>
    );
}

export default Contact;