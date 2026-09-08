import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled || menuOpen
                ? "px-4 py-3"
                : "px-6 py-5"
                }`}
        >
            <nav
                className={`relative mx-auto w-full max-w-6xl transition-all duration-300 ${scrolled || menuOpen
                    ? "rounded-2xl border border-white/70 bg-white/60 px-5 py-3 shadow-lg backdrop-blur-xl"
                    : ""
                    }`}
            >

                {/* TOP NAVBAR */}
                <div className="flex w-full items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={handleNavClick}
                        className="relative z-10 text-xl font-bold text-[#303653]"
                    >
                        Sevenia<span className="text-[#f07fe1]">.</span>
                    </a>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-[#646b83] transition hover:text-[#f07fe1]"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-white/70 text-[#555d78] shadow-sm backdrop-blur-md transition hover:bg-white lg:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            /* X */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6l12 12M18 6L6 18"
                                />
                            </svg>
                        ) : (
                            /* Hamburger */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 7h16M4 12h16M4 17h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-white/70 bg-[#faf9ff] p-3 shadow-xl shadow-purple-100/30 lg:hidden">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#646b83] transition hover:bg-white hover:text-[#8975e7]"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;