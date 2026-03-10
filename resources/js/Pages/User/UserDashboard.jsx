import UserLayout from '@/Layouts/UserLayout';
import { Head, usePage } from '@inertiajs/react';

export default function UserDashboard() {
    const { auth } = usePage().props;
    const userName = auth?.user?.name ?? 'User';

    return (
        <UserLayout>
            <Head title="Dashboard" />
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-sky-900">Dashboard</h1>
                <p className="mt-2 text-sky-700">
                    Welcome, {userName}! You are logged in.
                </p>
                <div className="mt-6 rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
                    <p className="text-sm text-sky-600">
                        Your profile, recipes, and activity will appear here.
                    </p>
                </div>
            </div>
        </UserLayout>
    );
}
