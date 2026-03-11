import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (



        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white px-4  sm:px-6 lg:px-8 pt-24">

            <div className="max-w-7xl mx-auto text-center mt-24">
                <p className="text-3xl font-semibold   text-secondary ">
                    WELCOME TO
                </p>

                <h1 className="text-6xl md:text-7xl font-semibold mt-3 text-secondary">
                    Liver Rescue Co.
                </h1>

                <p className=" text-lg mt-4 text-secondary">
                    Join a Community Built on Understanding & Healing.
                </p>


                <div className="flex justify-center space-x-6 mt-8">

                    <button
                        className="bg-indigo-500 text-white px-8 py-3 rounded-full shadow hover:bg-indigo-600 bg-primary">
                        Join Now
                    </button>

                    <button
                        className="border border-indigo-400 text-indigo-600 px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-indigo-50">
                        <span className="text-secondary">Watch Our Story</span>
                        <span
                            className="bg-indigo-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm bg-secondary">▶</span>
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <img src="/images/hero-img.png" className="w-100" />
            </div>
        </section>
    );
}
