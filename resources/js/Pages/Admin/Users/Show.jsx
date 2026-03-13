import AdminLayout from '@/Layouts/AdminLayout'
import { Head, Link } from '@inertiajs/react'

export default function Show({ user }) {

    return (
        <AdminLayout header={<h2 className="text-xl font-semibold text-gray-800">User Profile</h2>}>

            <Head title="User Profile" />

            <div className="py-10">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white shadow-xl rounded-xl overflow-hidden border">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                            <h2 className="text-2xl font-bold">User Details</h2>
                            <p className="text-blue-100 text-sm">View complete user information</p>
                        </div>

                        {/* Body */}
                        <div className="p-8">

                            {/* Profile */}
                            <div className="flex items-center space-x-6">

                                <img
                                    src={user.profile_photo ? `/storage/${user.profile_photo}` : 'https://via.placeholder.com/120'}
                                    className="h-28 w-28 rounded-full border-4 border-blue-100 shadow-md object-cover"
                                />

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
                                    <p className="text-gray-500">{user.email}</p>

                                    {/* Status Badge */}
                                    <span className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${user.profile_approved
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {user.profile_approved ? 'Approved' : 'Pending'}
                                    </span>
                                </div>

                            </div>

                            {/* Info Section */}
                            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">User ID</p>
                                    <p className="font-semibold text-gray-800">{user.id}</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">Roles</p>

                                    <div className="mt-1 flex flex-wrap gap-2">
                                        {user.roles?.length ? (
                                            user.roles.map(role => (
                                                <span
                                                    key={role.id}
                                                    className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full"
                                                >
                                                    {role.name}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-gray-500">No Role</span>
                                        )}
                                    </div>
                                </div>

                            </div> */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <p className="text-gray-500 text-sm">Phone</p>
                                    <p className="font-semibold">{user.phone || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">Gender</p>
                                    <p className="font-semibold">{user.gender || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">Age</p>
                                    <p className="font-semibold">{user.age || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">Country</p>
                                    <p className="font-semibold">{user.country || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">State</p>
                                    <p className="font-semibold">{user.state || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">City</p>
                                    <p className="font-semibold">{user.city || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">Healing Stage</p>
                                    <p className="font-semibold">{user.healing_stage || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">MM Cleanse Days</p>
                                    <p className="font-semibold">{user.mm_cleanse_days || '-'}</p>
                                </div>

                                <div className="md:col-span-2">
                                    <p className="text-gray-500 text-sm">Symptoms</p>
                                    <p className="font-semibold">{user.symptoms || '-'}</p>
                                </div>

                                <div className="md:col-span-2">
                                    <p className="text-gray-500 text-sm">Bio</p>
                                    <p className="font-semibold">{user.bio || '-'}</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">Available for Consult</p>
                                    <p className="font-semibold">
                                        {user.available_for_consult ? 'Yes' : 'No'}
                                    </p>
                                </div>

                            </div>

                            {/* Back Button */}
                            <div className="mt-10">
                                <Link
                                    href={route('admin.users')}
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
                                >
                                    ← Back to Users
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </AdminLayout>
    )
}
