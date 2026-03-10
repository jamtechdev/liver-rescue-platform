import FeatureCard from './FeatureCard';

const FEATURES = [
    {
        title: 'Find Your Support Buddy',
        description:
            'Connect with someone who shares your challenges on the Medical Medium path. Find a person with similar health struggles, ready to offer support and practical advice to guide your healing.',
        icon: (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        highlighted: false,
    },
    {
        title: 'Build Meaningful Relationships',
        description:
            'Use our dating feature to find friends or a romantic partner who shares your Medical Medium lifestyle, with seamless integration across user profiles.',
        icon: (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        highlighted: true,
    },
    {
        title: 'Share & Discover Recipes',
        description:
            'Explore and contribute Medical Medium-compliant recipes to nourish your wellness, sparking conversations to deepen community ties.',
        icon: (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        highlighted: false,
    },
];

export default function FeatureSection() {
    return (
        <section className="border-t border-sky-100 bg-sky-50/50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => {}}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow hover:bg-sky-50"
                        aria-label="Previous"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="grid flex-1 gap-6 px-4 sm:grid-cols-3">
                        {FEATURES.map((feature, index) => (
                            <FeatureCard
                                key={feature.title}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                highlighted={feature.highlighted}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => {}}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow hover:bg-sky-50"
                        aria-label="Next"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
