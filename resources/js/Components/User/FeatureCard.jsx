export default function FeatureCard({ title, description, icon, highlighted = false }) {
    return (
        <div
            className={`rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                highlighted ? 'border-sky-300 ring-2 ring-sky-100' : 'border-sky-100'
            }`}
        >
            <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg ${
                    highlighted ? 'bg-sky-600 text-white' : 'border border-sky-200 bg-sky-50 text-sky-600'
                }`}
            >
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sky-700">
                {description}
            </p>
        </div>
    );
}
