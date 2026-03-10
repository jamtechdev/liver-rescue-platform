import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-sky-800">
                    Welcome to
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-sky-900 sm:text-5xl lg:text-6xl">
                    Liver Rescue Co.
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-800">
                    Join a community built on understanding and healing.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href={route('register')}
                        className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-base font-medium text-white hover:bg-sky-700"
                    >
                        Join Now
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 bg-white px-6 py-3 text-base font-medium text-sky-600 hover:bg-sky-50"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </span>
                        Watch Our Story
                    </button>
                </div>
            </div>
            <div className="mx-auto mt-12 flex justify-center">
                <div className="flex items-end gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="h-16 w-12 rounded-full bg-sky-200/80 sm:h-20 sm:w-14"
                            style={{ height: `${56 + i * 8}px` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
