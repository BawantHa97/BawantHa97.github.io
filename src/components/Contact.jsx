export default function Contact({ t }) {
    return (
        <section id="contact" className="py-20 px-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
                {t.contact.title}
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                {t.contact.subtitle}
            </p>

            {/* Contact Details Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 max-w-4xl mx-auto">

                {/* Email Card */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full md:w-1/3">
                    <h3 className="text-cyan-400 font-semibold mb-2">Email</h3>
                    <a
                        href="mailto:bawanthaharshana@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors break-all"
                    >
                        {t.contact.emailAddress || "bawanthaharshana@gmail.com"}
                    </a>
                </div>

                {/* Phone & Location Card */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full md:w-1/3">
                    <h3 className="text-cyan-400 font-semibold mb-2">Location & Phone</h3>
                    <p className="text-gray-300 mb-1">
                        {t.contact.location || "Kyoto, Japan"}
                    </p>
                    <a href="tel:+817085602029" className="text-gray-400 hover:text-white transition-colors block">
                        {t.contact.phone || "+81-708-560-2029"}
                    </a>
                </div>

                {/* LinkedIn Card */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full md:w-1/3">
                    <h3 className="text-cyan-400 font-semibold mb-2">Professional</h3>
                    <a
                        href="https://www.linkedin.com/in/bawantha-harshana-64a509207/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors block mb-2"
                    >
                        {t.contact.linkedin || "LinkedIn Profile"}
                    </a>
                </div>

            </div>

            {/* Main Call to Action Button */}
            <a
                href="mailto:bawanthaharshana@gmail.com"
                className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
                {t.contact.emailButton || "Send Email"}
            </a>
        </section>
    );
}