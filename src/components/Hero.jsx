import { TypeAnimation } from "react-type-animation";

export default function Hero({ t }) {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 text-center"
        >
            <div className="flex justify-center mb-8 md:mb-0 md:mr-10">
                <img
                    src="/images/your-profile-pic.jpg" /* Make sure the path matches your public folder */
                    alt="Bawantha Harshana - Software Engineer"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#0E1424] shadow-[0_0_15px_rgba(34,211,238,0.5)] ring-2 ring-cyan-400"
                />
            </div>
            <div className="max-w-3xl">

                <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
                    {t.hero.greeting} <br />
                    <span className="text-white">Bawantha Harshana</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-300 mb-6 h-10">
                    <TypeAnimation
                        sequence={[
                            "Full-Stack Software Engineer",
                            1500,
                            "Spring Boot Developer",
                            1500,
                            "React Frontend Developer",
                            1500,
                            "Backend API Engineer",
                            1500,
                            "Web Engineer",
                            1500,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                </h2>

                <p className="text-gray-400 leading-relaxed mb-10">
                    {t.hero.description}
                </p>

                <div className="flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition duration-300"
                    >
                        {t.hero.viewProjects}
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gray-500 hover:border-cyan-400 rounded-xl transition duration-300"
                    >
                        {t.hero.contact}
                    </a>
                </div>
                <div className="flex gap-4 justify-center mt-4 flex-wrap">

                    <a
                        href="/docs/Bawantha_Harshana_Resume.pdf"
                        target="_blank"
                        className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    >
                        Download Resume
                    </a>

                    <a
                        href="/docs/SME_Thesis.pdf"
                        target="_blank"
                        className="px-5 py-2 border border-gray-500 rounded-lg hover:border-cyan-400 transition"
                    >
                        View Thesis
                    </a>

                    <a
                        href="/docs/HCL_Service_Letter.pdf"
                        target="_blank"
                        className="px-5 py-2 border border-gray-500 rounded-lg hover:border-cyan-400 transition"
                    >
                        Experience Letter
                    </a>

                </div>

            </div>
        </section>
    );
}