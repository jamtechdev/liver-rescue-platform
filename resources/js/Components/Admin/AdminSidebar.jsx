import { Link, usePage } from '@inertiajs/react';

const SIDEBAR_LINKS = [
    {
        group: 'Main',
        items: [
            { href: route('admin.dashboard'), label: 'Dashboard', icon: 'dashboard' },
        ]
    },
    {
        group: 'Users',
        items: [
            { href: route('admin.users'), label: 'All Users', icon: 'users' },
            // Agar Pending Approvals chahiye to yeh line add kar dena
            // { href: route('admin.users.pending'), label: 'Pending Approvals', icon: 'clock' },
        ]
    },
];

function SidebarIcon({ name }) {
    const iconClass = 'h-5 w-5 shrink-0';

    switch (name) {
        case 'dashboard':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            );
        case 'users':
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        default:
            return null;
    }
}

export default function AdminSidebar({ collapsed, onToggle }) {
    const { url } = usePage();  // current URL check karne ke liye

    return (
        <aside
            className={`flex flex-col border-r border-gray-200 bg-gray-900 text-white transition-all duration-300 ${
                collapsed ? 'w-16' : 'w-64'
            }`}
        >
            <div className="flex h-14 items-center justify-between border-b border-gray-700 px-4">
                {!collapsed && <span className="text-base font-bold">Admin Panel</span>}
                <button
                    onClick={onToggle}
                    className="rounded p-1.5 hover:bg-gray-800 focus:outline-none"
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    <svg
                        className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <nav className="flex-1 space-y-6 p-3 overflow-y-auto">
                {SIDEBAR_LINKS.map((section) => (
                    <div key={section.group}>
                        {!collapsed && (
                            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                {section.group}
                            </h3>
                        )}
                        {section.items.map((item) => {
                            const isActive = url.startsWith(item.href); // sahi active check
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                    }`}
                                >
                                    <SidebarIcon name={item.icon} />
                                    {!collapsed && <span>{item.label}</span>}
                                </Link>
                            );
                        })}
                    </div>
                ))}
            </nav>
        </aside>
    );
}
