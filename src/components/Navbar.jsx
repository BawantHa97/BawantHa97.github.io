export default function Navbar({ language, setLanguage, t }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0E1424]/90 backdrop-blur-md border-b border-gray-800 shadow-sm">
            {/* max-w-6xl keeps it aligned with your Hero and Projects sections */}
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo / Full Name */}
                <a href="#hero" className="text-2xl font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors duration-300">
                    Bawantha <span className="text-cyan-400">Harshana</span>
                </a>

                {/* Right Side: Links & Language Toggle */}
                <div className="flex items-center gap-6 md:gap-10">

                    {/* Navigation Links (Hidden on tiny mobile screens, visible on tablets/desktops) */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                            {t?.about?.title || "About"}
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">
                            {t?.projects?.title || "Projects"}
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                            {t?.contact?.title || "Contact"}
                        </a>
                    </div>

                    {/* Language Toggle */}
                    <div className="flex bg-[#151C2C] rounded-lg p-1 border border-gray-700">
                        <button
                            onClick={() => setLanguage("en")}
                            className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${
                                language === "en"
                                    ? "bg-cyan-600 text-white shadow-md"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage("jp")}
                            className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${
                                language === "jp"
                                    ? "bg-cyan-600 text-white shadow-md"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            日本語
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}