import { Link } from '@inertiajs/react';

export default function UserFooter() {
    return (
        <footer className="border-t border-sky-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <Link href={route('home')} className="text-sm font-medium text-sky-900">
                        Liver Rescue Co.
                    </Link>
                    <div className="flex gap-6 text-sm text-sky-700">
                        <Link href={route('our-mission')} className="hover:text-sky-900">
                            Our Mission
                        </Link>
                        <Link href={route('support')} className="hover:text-sky-900">
                            Support
                        </Link>
                        <Link href={route('home')} className="hover:text-sky-900">
                            Home
                        </Link>
                    </div>
                </div>
                <p className="mt-4 text-center text-xs text-sky-600 sm:text-left">
                    Join a community built on understanding and healing.
                </p>
            </div>
        </footer>
    );
}
