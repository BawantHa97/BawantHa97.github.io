export default function Projects({ t }) {
    return (
        <section id="projects" className="py-20 px-10 bg-[#0B1120] text-center">
            <h2 className="text-3xl font-bold mb-12">
                {t.projects.title}
            </h2>

            {/* Grid layout: 1 column on mobile, 2 on medium screens, 3 on large screens */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {t.projects.items.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#151C2C] p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300 flex flex-col"
                    >
                        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                            {project.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-6 flex-grow">
                            {project.description}
                        </p>
                        <div className="mt-auto">
                            <span className="text-xs font-mono text-gray-400 bg-[#0E1424] px-3 py-1 rounded-full">
                                {project.tech}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}