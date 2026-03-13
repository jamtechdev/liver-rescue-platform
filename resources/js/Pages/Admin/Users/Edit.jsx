import AdminLayout from '@/Layouts/AdminLayout'
import { Head, useForm, Link } from '@inertiajs/react'

export default function Edit({ user }) {

    const { data, setData, put, processing } = useForm({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        gender: user.gender || '',
        age: user.age || '',
        country: user.country || '',
        state: user.state || '',
        city: user.city || '',
        healing_stage: user.healing_stage || '',
        mm_cleanse_days: user.mm_cleanse_days || '',
        symptoms: user.symptoms || '',
        bio: user.bio || '',
        available_for_consult: user.available_for_consult || false,
    });

    function submit(e) {
        e.preventDefault();
        put(route('admin.users.update', user.id));
    }

    return (
        <AdminLayout header={<h2 className="text-xl font-semibold text-gray-800">Edit User</h2>}>

            <Head title="Edit User" />

            <div className="py-10">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white shadow-xl rounded-xl border overflow-hidden">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                            <h2 className="text-2xl font-bold">Edit User Profile</h2>
                            <p className="text-blue-100 text-sm">Update user details</p>
                        </div>

                        <form onSubmit={submit} className="p-8 space-y-6">

                            {/* Profile Section */}
                            <div className="flex items-center space-x-6">

                                <img
                                    src={user.profile_photo ? `/storage/${user.profile_photo}` : 'https://via.placeholder.com/120'}
                                    className="h-24 w-24 rounded-full border shadow object-cover"
                                />

                                <div>
                                    <p className="text-sm text-gray-500">User Name</p>
                                    <p className="font-semibold">{user.name}</p>
                                </div>

                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <label className="text-sm text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Phone</label>
                                    <input
                                        type="text"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Age</label>
                                    <input
                                        type="number"
                                        value={data.age}
                                        onChange={(e) => setData('age', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Gender</label>
                                    <select
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        <option value="prefer_not_to_say">Prefer not to say</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Healing Stage</label>
                                    <select
                                        value={data.healing_stage}
                                        onChange={(e) => setData('healing_stage', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        <option value="">Select</option>
                                        <option value="early">Early</option>
                                        <option value="middle">Middle</option>
                                        <option value="advanced">Advanced</option>
                                        <option value="maintenance">Maintenance</option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Country</label>
                                    <input
                                        type="text"
                                        value={data.country}
                                        onChange={(e) => setData('country', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">State</label>
                                    <input
                                        type="text"
                                        value={data.state}
                                        onChange={(e) => setData('state', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">City</label>
                                    <input
                                        type="text"
                                        value={data.city}
                                        onChange={(e) => setData('city', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">MM Cleanse Days</label>
                                    <input
                                        type="number"
                                        value={data.mm_cleanse_days}
                                        onChange={(e) => setData('mm_cleanse_days', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-sm text-gray-600">Symptoms</label>
                                    <textarea
                                        value={data.symptoms}
                                        onChange={(e) => setData('symptoms', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-sm text-gray-600">Bio</label>
                                    <textarea
                                        value={data.bio}
                                        onChange={(e) => setData('bio', e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={data.available_for_consult}
                                        onChange={(e) => setData('available_for_consult', e.target.checked)}
                                    />
                                    <label>Available for Consult</label>
                                </div>

                            </div>

                            {/* Button */}
                            <div className="pt-6 flex items-center gap-4">

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
                                >
                                    Update User
                                </button>

                                <Link
                                    href={route('admin.users')}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg"
                                >
                                    Back
                                </Link>

                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </AdminLayout>
    )
}
