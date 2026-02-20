export default function About({ t }) {
    return (
        <section className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
                {t.about.title}
            </h2>
            <p className="text-gray-400">
                {t.about.text}
            </p>
        </section>
    );
}