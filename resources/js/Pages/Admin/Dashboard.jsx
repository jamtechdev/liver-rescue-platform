import AdminLayout from '@/Layouts/AdminLayout'
import { Head, router } from '@inertiajs/react'
import { Users, CheckCircle, Clock, Phone } from 'lucide-react'

export default function AdminDashboard({ stats, recentUsers }) {

    const approveUser = (id) => {
        router.post(route('admin.users.approve', id))
    }

    return (
        <AdminLayout
            header={<h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="space-y-8">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {/* Total Users */}
                    <div className="p-6 rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm opacity-80">Total Users</p>
                                <h3 className="text-3xl font-bold">
                                    {stats.totalUsers}
                                </h3>
                            </div>
                            <Users size={36} />
                        </div>
                    </div>

                    {/* Approved Users */}
                    <div className="p-6 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-700 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm opacity-80">Approved Users</p>
                                <h3 className="text-3xl font-bold">
                                    {stats.approvedUsers}
                                </h3>
                            </div>
                            <CheckCircle size={36} />
                        </div>
                    </div>

                    {/* Pending Users */}
                    <div className="p-6 rounded-xl text-white bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm opacity-80">Pending Users</p>
                                <h3 className="text-3xl font-bold">
                                    {stats.pendingUsers}
                                </h3>
                            </div>
                            <Clock size={36} />
                        </div>
                    </div>

                    {/* Consult Users */}
                    <div className="p-6 rounded-xl text-white bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm opacity-80">Consult Available</p>
                                <h3 className="text-3xl font-bold">
                                    {stats.consultUsers}
                                </h3>
                            </div>
                            <Phone size={36} />
                        </div>
                    </div>

                </div>


                {/* Recent Users */}
                <div className="bg-white rounded-xl shadow-lg border p-6">

                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Recent Users</h3>
                    </div>

                    <table className="w-full text-sm">

                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {recentUsers.map(user => (

                                <tr key={user.id} className="border-t hover:bg-gray-50">

                                    <td className="p-3 font-medium">
                                        {user.name}
                                    </td>

                                    <td className="p-3 text-gray-600">
                                        {user.email}
                                    </td>

                                    <td className="p-3">
                                        {user.profile_approved ? (
                                            <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                                                Approved
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">
                                                Pending
                                            </span>
                                        )}
                                    </td>

                                    <td className="p-3">

                                        {!user.profile_approved && (

                                            <button
                                                onClick={() => approveUser(user.id)}
                                                className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                                            >
                                                Approve
                                            </button>

                                        )}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </AdminLayout>
    )
}
