export default function Experience({ t }) {
    return (
        <section className="py-20 px-6 bg-[#0E1424]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    {t.experience.title}
                </h2>

                <div className="space-y-10">

                    {/* HCLTech Section */}
                    <div className="border-l-2 border-cyan-400 pl-6">
                        <h3 className="text-xl font-semibold text-cyan-400">
                            {t.experience.hcl.role}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            {t.experience.hcl.date}
                        </p>
                        <ul className="text-gray-300 list-disc ml-5 space-y-1">
                            {t.experience.hcl.bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Omak Technologies Section */}
                    <div className="border-l-2 border-cyan-400 pl-6">
                        <h3 className="text-xl font-semibold text-cyan-400">
                            {t.experience.omak.role}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            {t.experience.omak.date}
                        </p>
                        <ul className="text-gray-300 list-disc ml-5 space-y-1">
                            {t.experience.omak.bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}