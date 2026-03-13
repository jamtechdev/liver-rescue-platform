import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function AllUsers({ users }) {
    // Approve button handler
    const handleApprove = (userId) => {
        if (!confirm('Are you sure you want to approve this user?')) return;

        router.patch(route('admin.users.approve', userId), {}, {
            preserveScroll: true,
            onSuccess: () => {
                alert('User successfully approved!');
            },
            onError: (errors) => {
                console.error(errors);
                alert('Error occurred while approving.');
            },
        });
    };

    // Reject button handler
    const handleReject = (userId) => {
        if (!confirm('Are you sure you want to reject this user?')) return;

        router.patch(route('admin.users.reject', userId), {}, {
            preserveScroll: true,
            onSuccess: () => {
                alert('User rejected successfully.');
            },
            onError: (errors) => {
                console.error(errors);
                alert('Error occurred while rejecting.');
            },
        });
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Users
                </h2>
            }
        >
            <Head title="All Users - Admin" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Photo
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.data.length > 0 ? (
                                        users.data.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <img
                                                        src={user.profile_photo ? `/storage/${user.profile_photo}` : 'https://via.placeholder.com/40?text=No+Photo'}
                                                        alt={user.name}
                                                        className="h-10 w-10 rounded-full object-cover border border-gray-200"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{user.email}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                        {user.roles?.map(role => role.name).join(', ') || 'No Role'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.profile_approved
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                            }`}
                                                    >
                                                        {user.profile_approved ? 'Approved' : 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    {!user.profile_approved && (
                                                        <div className="flex space-x-4">
                                                            <button
                                                                onClick={() => handleApprove(user.id)}
                                                                className="text-green-600 hover:text-green-900 font-medium"
                                                            >
                                                                Approve
                                                            </button>
                                                            <button
                                                                onClick={() => handleReject(user.id)}
                                                                className="text-red-600 hover:text-red-900 font-medium"
                                                            >
                                                                Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                    {user.profile_approved && (
                                                        <span className="text-gray-500 italic">Approved</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {users.last_page > 1 && (
                            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                                <div className="text-sm text-gray-700">
                                    Showing {users.from || 0} to {users.to || 0} of {users.total} users
                                </div>
                                <div className="flex space-x-2">
                                    {users.prev_page_url && (
                                        <Link
                                            href={users.prev_page_url}
                                            className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                                        >
                                            Previous
                                        </Link>
                                    )}
                                    {users.next_page_url && (
                                        <Link
                                            href={users.next_page_url}
                                            className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
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
