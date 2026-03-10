import { useState } from 'react';
import AdminHeader from '@/Components/Admin/AdminHeader';
import AdminSidebar from '@/Components/Admin/AdminSidebar';

export default function AdminLayout({ header, children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed((c) => !c)}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    {header && (
                        <div className="mb-4">
                            {header}
                        </div>
                    )}
                    {children}
                </main>
            </div>
        </div>
    );
}
