import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function AdminDashboard() {
    return (
        <AdminLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <p className="mb-4 text-gray-700">
                    Welcome to the admin area. You can manage users and
                    platform settings from here.
                </p>
                <p className="text-sm text-gray-500">
                    Users, Roles, and other admin pages can be added later.
                </p>
            </div>
        </AdminLayout>
    );
}
