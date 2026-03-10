import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function PlaceholderPage({ title, message = 'This page is coming soon.' }) {
    return (
        <UserLayout>
            <Head title={title} />
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-sky-900">{title}</h1>
                <p className="mt-2 text-sky-700">{message}</p>
            </div>
        </UserLayout>
    );
}
