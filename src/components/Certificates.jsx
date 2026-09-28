import { useEffect, useRef, useState } from "react";
import { FiAward, FiExternalLink, FiFileText } from "react-icons/fi";

function Certificates() {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const certificates = [
        {
            title: "Microsoft Azure AI Fundamentals",
            issuer: "Microsoft",
            type: "Certification",
            year: "2026",
            description:
                "Sertifikasi Microsoft Azure sebagai bagian dari pengembangan pengetahuan dan keterampilan di bidang cloud computing.",
            file: "/certificates/microsoft.pdf",
        },
        {
            title: "Full Stack Web Development Bootcamp",
            issuer: "GameLab Indonesia / Educa Studio",
            type: "Bootcamp",
            year: "2025",
            description:
                "Pelatihan Full Stack Web Development yang mencakup pengembangan web menggunakan PHP, Laravel, MySQL, JavaScript, Bootstrap, dan teknologi pendukung lainnya.",
            file: "/certificates/gamelab.pdf",
        },
    ];

    return (
        <section
            id="certificates"
            ref={sectionRef}
            className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
        >
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* Heading */}
                <div
                    className={`mb-12 text-center transition-all duration-800 ease-out ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                        }`}
                >
                    <p className="mb-2 text-sm font-semibold tracking-wide text-[#f07fe1]">
                        Certificates
                    </p>

                    <h2 className="font-[Berkshire_Swash] text-4xl text-[#303653] sm:text-5xl">
                        Certifications<span className="text-[#f07fe1]">.</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#777d92] sm:text-base">
                        Certificates and training programs I have completed
                        throughout my learning journey.
                    </p>
                </div>

                {/* Certificate Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                    {certificates.map((certificate, index) => (
                        <div
                            key={certificate.title}
                            className={`group relative rounded-3xl border border-white/80 bg-white/55 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-xl transition-all duration-800 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100/40 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                                }`}
                            style={{
                                transitionDelay: `${150 + index * 150}ms`,
                            }}
                        >
                            {/* Top */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 text-[#d875a7] shadow-sm">
                                    <FiAward className="text-xl" />
                                </div>

                                <span className="rounded-full bg-[#fdf0f8] px-3 py-1 text-[11px] font-semibold text-[#c86d9f]">
                                    {certificate.type}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold leading-snug text-[#3d435f]">
                                    {certificate.title}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-[#a17ba0]">
                                    {certificate.issuer}
                                </p>

                                <p className="mt-4 text-sm leading-7 text-[#777d92]">
                                    {certificate.description}
                                </p>
                            </div>

                            {/* Bottom */}
                            <div className="mt-6 flex items-center justify-between border-t border-[#eeeaf5] pt-5">
                                <span className="text-xs font-medium text-[#9995aa]">
                                    {certificate.year}
                                </span>

                                <a
                                    href={certificate.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#faf4fb] px-4 py-2 text-xs font-semibold text-[#c86d9f] transition hover:bg-[#f8e8f5] hover:text-[#b85d91]"
                                >
                                    <FiFileText />
                                    View Certificate
                                    <FiExternalLink className="text-sm" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;