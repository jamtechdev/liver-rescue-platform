import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <UserLayout>
            <Head title="Profile" />
            <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold text-sky-900">Profile</h2>
                <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-sm sm:p-8">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>
                <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-sm sm:p-8">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>
                <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-sm sm:p-8">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </UserLayout>
    );
}
