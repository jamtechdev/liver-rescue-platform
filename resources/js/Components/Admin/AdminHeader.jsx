import { Link } from '@inertiajs/react';

export default function AdminHeader() {
    return (
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
            <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-900"
                >
                    View site
                </Link>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="rounded-md bg-gray-800 px-3 py-1.5 text-sm text-white hover:bg-gray-700"
                >
                    Log out
                </Link>
            </div>
        </header>
    );
}
