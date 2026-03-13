import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { EyeIcon, PencilSquareIcon, TrashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

export default function AllUsers({ users, filters }) {

    const [search, setSearch] = useState(filters?.search || '')
    const [status, setStatus] = useState(filters?.status || '')
    const [city, setCity] = useState(filters?.city || '')
    const [healingStage, setHealingStage] = useState(filters?.healing_stage || '')

    const applyFilters = () => {
        router.get(route('admin.users'), {
            search: search,
            status: status,
            city: city,
            healing_stage: healingStage
        }, {
            preserveState: true,
            replace: true
        })
    }

    const resetFilters = () => {
        router.get(route('admin.users'))
    }

    const handleApprove = (userId) => {
        if (!confirm('Are you sure you want to approve this user?')) return;

        router.patch(route('admin.users.approve', userId), {}, {
            preserveScroll: true
        });
    };

    const handleReject = (userId) => {
        if (!confirm('Are you sure you want to reject this user?')) return;

        router.patch(route('admin.users.reject', userId), {}, {
            preserveScroll: true
        });
    };

    const handleDelete = (userId) => {
        if (!confirm('Are you sure you want to delete this user?')) return;

        router.delete(route('admin.users.destroy', userId), {
            preserveScroll: true
        });
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    All Users
                </h2>
            }
        >
            <Head title="All Users - Admin" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">

                        {/* FILTER SECTION */}
                        <div className="p-4 border-b bg-gray-50">

                            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

                                <input
                                    type="text"
                                    placeholder="Search name or email..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="border rounded p-2"
                                />

                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="border rounded p-2"
                                >
                                    <option value="">All Status</option>
                                    <option value="1">Approved</option>
                                    <option value="0">Pending</option>
                                </select>

                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="border rounded p-2"
                                />

                                <select
                                    value={healingStage}
                                    onChange={(e) => setHealingStage(e.target.value)}
                                    className="border rounded p-2"
                                >
                                    <option value="">Healing Stage</option>
                                    <option value="early">Early</option>
                                    <option value="middle">Middle</option>
                                    <option value="advanced">Advanced</option>
                                    <option value="maintenance">Maintenance</option>
                                </select>

                                <button
                                    onClick={applyFilters}
                                    className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                                >
                                    Apply
                                </button>

                                <button
                                    onClick={resetFilters}
                                    className="bg-gray-200 rounded px-4 py-2 hover:bg-gray-300"
                                >
                                    Reset
                                </button>

                            </div>

                        </div>


                        {/* TABLE */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">

                                <thead className="bg-blue-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Photo</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">

                                    {users.data.length > 0 ? (

                                        users.data.map((user) => (

                                            <tr key={user.id} className="hover:bg-gray-50">

                                                <td className="px-6 py-4">
                                                    <img
                                                        src={user.profile_photo
                                                            ? `/storage/${user.profile_photo}`
                                                            : 'https://via.placeholder.com/40'
                                                        }
                                                        className="h-10 w-10 rounded-full object-cover border"
                                                    />
                                                </td>

                                                <td className="px-6 py-4 text-sm font-medium">
                                                    {user.name}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {user.email}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <span className="px-2 text-xs bg-blue-100 text-blue-800 rounded-full">
                                                        {user.roles?.map(role => role.name).join(', ') || 'No Role'}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4">

                                                    <span
                                                        className={`px-2 text-xs rounded-full ${user.profile_approved
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                            }`}
                                                    >
                                                        {user.profile_approved ? 'Approved' : 'Pending'}
                                                    </span>

                                                </td>

                                                <td className="px-6 py-4">

                                                    <div className="flex items-center space-x-4">

                                                        <Link
                                                            href={route('admin.users.show', user.id)}
                                                            className="text-blue-500"
                                                        >
                                                            <EyeIcon className="w-5 h-5" />
                                                        </Link>

                                                        <Link
                                                            href={route('admin.users.edit', user.id)}
                                                            className="text-indigo-500"
                                                        >
                                                            <PencilSquareIcon className="w-5 h-5" />
                                                        </Link>

                                                        <button
                                                            onClick={() => handleDelete(user.id)}
                                                            className="text-red-500"
                                                        >
                                                            <TrashIcon className="w-5 h-5" />
                                                        </button>

                                                        {!user.profile_approved && (
                                                            <>
                                                                <button
                                                                    onClick={() => handleApprove(user.id)}
                                                                    className="text-green-500"
                                                                >
                                                                    <CheckCircleIcon className="w-5 h-5" />
                                                                </button>

                                                                <button
                                                                    onClick={() => handleReject(user.id)}
                                                                    className="text-yellow-500"
                                                                >
                                                                    <XCircleIcon className="w-5 h-5" />
                                                                </button>
                                                            </>
                                                        )}

                                                    </div>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>
                                            <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                                                No users found
                                            </td>
                                        </tr>

                                    )}

                                </tbody>

                            </table>
                        </div>


                        {/* PAGINATION */}
                        {users.last_page > 1 && (
                            <div className="px-6 py-4 flex justify-between border-t">

                                <div className="text-sm text-gray-700">
                                    Showing {users.from || 0} to {users.to || 0} of {users.total}
                                </div>

                                <div className="flex space-x-2">

                                    {users.prev_page_url && (
                                        <Link
                                            href={users.prev_page_url}
                                            className="px-3 py-1 border rounded text-sm"
                                        >
                                            Previous
                                        </Link>
                                    )}

                                    {users.next_page_url && (
                                        <Link
                                            href={users.next_page_url}
                                            className="px-3 py-1 border rounded text-sm"
                                        >
                                            Next
                                        </Link>
                                    )}

                                </div>

                            </div>
                        )}

                    </div>

                </div>
            </div>

        </AdminLayout>
    );
}
