import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route('admin.recipes.store'), { title, description }, {
            onError: (err) => setErrors(err),
        });
    };

    return (
        <AdminLayout
            header={<h2 className="font-semibold text-xl text-gray-800">Create Recipe</h2>}
        >
            <Head title="Create Recipe" />

            <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Create
                    </button>

                </form>

            </div>
        </AdminLayout>
    );
}
