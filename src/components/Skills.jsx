import { useEffect, useRef, useState } from "react";

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const skills = [
        "Laravel",
        "HTML",
        "React",
        "JavaScript",
        "CSS",
        "Bootstrap",
        "Golang",
        "Python",
        "Docker",
        "PostgreSQL",
        "PHP",
        "MySQL",
        "Figma",
        "Canva",
        "UI/UX Design",
        "Use Case",
        "Activity Diagram",
        "ERD",
        "Flowchart",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Pentaho",
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
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="skills"
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
                        Skills
                    </p>

                    <h2 className="font-[Berkshire_Swash] text-4xl font-bold tracking-tight text-[#303653] sm:text-5xl">
                        Things I work with.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#777d92]">
                        Teknologi, tools, dan kemampuan yang saya gunakan
                        dalam proses perancangan maupun pengembangan website.
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <span
                            key={skill}
                            className={`rounded-full bg-[#fad6f583] px-4 py-2 text-xs font-medium text-[#66275e] transform transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#ffa9f4] hover:text-[#59044d] ${isVisible
                                ? "translate-y-0 scale-100 opacity-100"
                                : "translate-y-5 scale-90 opacity-0"
                                }`}
                            style={{
                                transitionDelay: `${250 + index * 60}ms`,
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;