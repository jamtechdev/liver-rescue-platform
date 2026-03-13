import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { EyeIcon, TrashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function Recipes({ recipes }) {

    const handleApprove = (id) => {
        if (!confirm('Approve this recipe?')) return;

        router.post(route('admin.recipes.approve', id), {}, {
            preserveScroll: true
        });
    };

    const handleReject = (id) => {
        if (!confirm('Reject this recipe?')) return;

        router.post(route('admin.recipes.reject', id), {}, {
            preserveScroll: true
        });
    };

    const handleDelete = (id) => {
        if (!confirm('Delete this recipe?')) return;

        router.delete(route('admin.recipes.destroy', id), {
            preserveScroll: true
        });
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Recipes Management
                </h2>

            }
        >
            <Head title="Recipes - Admin" />
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-xl text-gray-800">Recipes Management</h2>
                <Link
                    href={route('admin.recipes.create')}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create Recipe
                </Link>
            </div>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">

                        {/* TABLE */}
                        <div className="overflow-x-auto">

                            <table className="min-w-full divide-y divide-gray-200">

                                <thead className="bg-blue-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">

                                    {recipes.length > 0 ? (

                                        recipes.map((recipe) => (

                                            <tr key={recipe.id} className="hover:bg-gray-50">

                                                <td className="px-6 py-4 text-sm font-medium">
                                                    {recipe.title}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    {recipe.user?.name}
                                                </td>

                                                <td className="px-6 py-4">

                                                    <span
                                                        className={`px-2 text-xs rounded-full ${recipe.status === 'approved'
                                                            ? 'bg-green-100 text-green-800'
                                                            : recipe.status === 'rejected'
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                            }`}
                                                    >
                                                        {recipe.status}
                                                    </span>

                                                </td>

                                                <td className="px-6 py-4">

                                                    <div className="flex items-center space-x-4">

                                                        <Link
                                                            href={route('admin.recipes.show', recipe.id)}
                                                            className="text-blue-500"
                                                        >
                                                            <EyeIcon className="w-5 h-5" />
                                                        </Link>

                                                        {recipe.status !== 'approved' && (
                                                            <button
                                                                onClick={() => handleApprove(recipe.id)}
                                                                className="text-green-500"
                                                            >
                                                                <CheckCircleIcon className="w-5 h-5" />
                                                            </button>
                                                        )}

                                                        {recipe.status !== 'rejected' && (
                                                            <button
                                                                onClick={() => handleReject(recipe.id)}
                                                                className="text-yellow-500"
                                                            >
                                                                <XCircleIcon className="w-5 h-5" />
                                                            </button>
                                                        )}

                                                        <button
                                                            onClick={() => handleDelete(recipe.id)}
                                                            className="text-red-500"
                                                        >
                                                            <TrashIcon className="w-5 h-5" />
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>
                                            <td colSpan="4" className="px-6 py-10 text-center text-gray-500">
                                                No recipes found
                                            </td>
                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>
            </div>

        </AdminLayout>
    );
}
