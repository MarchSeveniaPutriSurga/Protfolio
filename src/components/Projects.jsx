import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";

function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const projects = [
        {
            number: "01",
            title: "SPK Kelayakan Nasabah",
            description:
                "Sistem pendukung keputusan berbasis web untuk membantu proses penilaian kelayakan calon nasabah.",
            tech: ["Laravel", "PHP", "MySQL"],
            type: "Web Application",
            media: [
                { type: "image", src: "/images/spk-nasabah/1.png" },
                { type: "image", src: "/images/spk-nasabah/2.png" },
                { type: "image", src: "/images/spk-nasabah/3.png" },
            ],
            thumbnail: {
                type: "image",
                src: "/images/spk-nasabah/1.png",
            },
        },
        {
            number: "02",
            title: "Website Permohonan Magang",
            description:
                "Website untuk mengelola proses pendaftaran dan permohonan magang secara terstruktur.",
            tech: ["React", "Go", "MySQL"],
            type: "Web Application",
            media: [
                { type: "image", src: "/images/permohonan-magang/2.png" },
                { type: "image", src: "/images/permohonan-magang/3.png" },
                { type: "image", src: "/images/permohonan-magang/8.png" },
            ],
            thumbnail: {
                type: "image",
                src: "/images/permohonan-magang/2.png",
            },
        },
        {
            number: "03",
            title: "Klasifikasi Penyakit Kulit Kucing",
            description:
                "Klasifikasi penyakit kulit kucing menggunakan Python dan CNN yang dilatih dengan dataset gambar untuk mengenali jenis penyakit berdasarkan foto.",
            tech: ["Figma", "React", "UI/UX"],
            type: "Machine Learning",
            media: [
                { type: "image", src: "/images/klasifikasi/1.png" },
                { type: "image", src: "/images/klasifikasi/2.png" },
                { type: "image", src: "/images/klasifikasi/3.png" },
            ],
            thumbnail: {
                type: "image",
                src: "/images/klasifikasi/1.png",
            },
        },
        {
            number: "04",
            title: "Redesign Peladen",
            description:
                "Perancangan ulang tampilan platform Peladen dengan memperhatikan struktur informasi dan pengalaman pengguna.",
            tech: ["Figma", "React", "UI/UX"],
            type: "Redesign & Development",
            media: [
                { type: "image", src: "/images/Peladen/1.png" },
                { type: "image", src: "/images/Peladen/2.png" },
                { type: "image", src: "/images/Peladen/3.png" },
            ],
            thumbnail: {
                type: "image",
                src: "/images/Peladen/1.png",
            },
        },
        {
            number: "05",
            title: "Gamification",
            description:
                "Perancangan dan pengembangan tampilan website dengan menerapkan elemen gamifikasi untuk meningkatkan interaksi pengguna.",
            tech: ["Figma", "UI/UX"],
            type: "Web Design",
            media: [
                { type: "image", src: "/images/gamification/1.png" },
                { type: "image", src: "/images/gamification/2.png" },
                { type: "image", src: "/images/gamification/3.png" },
            ],
            thumbnail: {
                type: "image",
                src: "/images/gamification/1.png",
            },
        },
        {
            number: "06",
            title: "Zaptech",
            description:
                "Perancangan tampilan website dengan fokus pada visual, struktur informasi, dan pengalaman pengguna.",
            tech: ["Figma", "UI/UX"],
            type: "Web Design",
            figma: "https://www.figma.com/proto/79MQ19JIFFM6GCnV1FOvYD/UI-UX-iseng?node-id=135-669&viewport=238%2C461%2C0.06&t=jhlPjbihmqmXaBdf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=125%3A640&show-proto-sidebar=1&page-id=123%3A639",
            media: [
                { type: "image", src: "/images/zaptech/1.png" },
                { type: "image", src: "/images/zaptech/2.png" },
                { type: "video", src: "/images/zaptech/3.mp4" },
            ],
            thumbnail: {
                type: "video",
                src: "/images/zaptech/3.mp4",
            },
        },
        {
            number: "07",
            title: "Stripes",
            description:
                "Perancangan website dengan pendekatan visual yang modern serta memperhatikan struktur dan pengalaman pengguna.",
            tech: ["Figma", "UI/UX"],
            type: "Web Design",
            figma: "https://www.figma.com/proto/QmcPohBmKUgZQNwNBcL2C2/fake-project-web?node-id=3-3&viewport=357%2C46%2C0.12&t=y7pjAnm8wUJSmkNp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A3&page-id=0%3A1",
            media: [
                { type: "image", src: "/images/stripesweb/1.png" },
                { type: "image", src: "/images/stripesweb/2.png" },
                { type: "video", src: "/images/stripesweb/3.mp4" },
            ],
            thumbnail: {
                type: "video",
                src: "/images/stripesweb/3.mp4",
            },
        },
        {
            number: "08",
            title: "Recipe Mobile",
            description:
                "Perancangan antarmuka aplikasi mobile untuk membantu pengguna menemukan dan mengelola berbagai resep.",
            tech: ["Figma", "UI/UX", "Mobile Design"],
            type: "Mobile Design",
            figma: "https://www.figma.com/proto/79MQ19JIFFM6GCnV1FOvYD/UI-UX-iseng?node-id=9-211&viewport=913%2C545%2C0.29&t=r9sTYLAVz2TU1vGT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=17%3A47&page-id=0%3A1",
            media: [
                { type: "image", src: "/images/recipe-mobile/1.png" },
                { type: "image", src: "/images/recipe-mobile/2.png" },
                { type: "video", src: "/images/recipe-mobile/3.mp4" },
            ],
            thumbnail: {
                type: "video",
                src: "/images/recipe-mobile/3.mp4",
            },
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.12,
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
                id="projects"
                ref={sectionRef}
                className="relative overflow-hidden py-28"
            >
                <div className="mx-auto max-w-6xl px-6">

                    {/* Heading */}
                    <div
                        className={`mb-14 max-w-2xl transform transition-all duration-800 ease-out ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                            }`}
                    >
                        <p className="mb-3 text-sm font-semibold tracking-wide text-[#f07fe1]">
                            Projects
                        </p>

                        <h2 className="font-[Berkshire_Swash] text-4xl tracking-tight text-[#303653] sm:text-5xl">
                            Selected projects.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[#777d92]">
                            Beberapa proyek yang pernah saya kerjakan selama kuliah,
                            magang, maupun dalam proses belajar dan pengembangan diri.
                        </p>
                    </div>

                    {/* Project Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <article
                                key={project.number}
                                className={`group overflow-hidden rounded-3xl border border-white/70 bg-white/45 shadow-xl shadow-pink-100/30 backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/60 ${isVisible
                                    ? "translate-y-0 scale-100 opacity-100"
                                    : "translate-y-10 scale-[0.97] opacity-0"
                                    }`}
                                style={{
                                    transitionDelay: `${200 + index * 100}ms`,
                                }}
                            >
                                {/* Project Preview */}
                                <button
                                    type="button"
                                    onClick={() => setActiveProject(project)}
                                    className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#fce7f3] to-[#fceff5]"
                                >
                                    {/* Decorative circles */}
                                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-xl" />

                                    <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-pink-200/30 blur-xl" />

                                    {/* Thumbnail */}
                                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                                        {project.thumbnail.type === "video" ? (
                                            <video
                                                src={project.thumbnail.src}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                                            />
                                        ) : (
                                            <img
                                                src={project.thumbnail.src}
                                                alt={project.title}
                                                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                                            />
                                        )}
                                    </div>

                                    {/* Number */}
                                    <span className="absolute right-5 top-5 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#8d84a7] backdrop-blur-md">
                                        {project.number}
                                    </span>

                                    {/* Media Count */}
                                    <span className="absolute bottom-4 right-5 rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium text-[#77709a] backdrop-blur-md">
                                        {project.media.length} media
                                    </span>
                                </button>

                                {/* Project Info */}
                                <div className="p-7">
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9786df]">
                                        {project.type}
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold text-[#3e4664]">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#7b8194]">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tech.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full bg-[#fce7f3] px-3 py-1.5 text-[10px] font-medium text-[#9a7188]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Figma */}
                                    {project.figma !== undefined && (
                                        <a
                                            href={project.figma || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => {
                                                if (!project.figma) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            className={`mt-6 inline-flex items-center text-xs font-semibold transition ${project.figma
                                                ? "text-[#d875a7] hover:text-[#c45b91]"
                                                : "cursor-default text-[#aaa5bd]"
                                                }`}
                                        >
                                            Figma Prototype
                                            <FiArrowUpRight className="ml-1.5 text-sm" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            {activeProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#303653]/40 p-4 backdrop-blur-md"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setActiveProject(null)}
                            aria-label="Close project"
                            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#77709a] shadow-sm transition hover:bg-white hover:text-[#4f476e]"
                        >
                            <FiX className="text-lg" />
                        </button>

                        {/* Modal Heading */}
                        <div className="mb-6 pr-12">
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9786df]">
                                {activeProject.type}
                            </p>

                            <h3 className="mt-1 text-2xl font-semibold text-[#3e4664]">
                                {activeProject.title}
                            </h3>
                        </div>

                        {/* Media Gallery */}
                        <div className="flex flex-col items-center gap-6">
                            {activeProject.media.map((media, index) => (
                                <div
                                    key={index}
                                    className="flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f3f0fb]"
                                >
                                    {media.type === "image" ? (
                                        <img
                                            src={media.src}
                                            alt={`${activeProject.title} ${index + 1}`}
                                            className="max-h-[75vh] w-auto max-w-full object-contain"
                                        />
                                    ) : (
                                        <video
                                            src={media.src}
                                            controls
                                            playsInline
                                            className="max-h-[75vh] w-full object-contain"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Figma Link */}
                        {activeProject.figma && (
                            <div className="mt-6 text-center">
                                <a
                                    href={activeProject.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-full bg-[#fce7f3] px-5 py-2.5 text-xs font-semibold text-[#9a7188] transition hover:bg-[#f9d9e9] hover:text-[#c45b91]"
                                >
                                    Open Figma Prototype
                                    <FiArrowUpRight className="ml-1.5 text-sm" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;