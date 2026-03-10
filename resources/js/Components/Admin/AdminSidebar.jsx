import { Link } from '@inertiajs/react';

const SIDEBAR_LINKS = [
    { href: route('admin.dashboard'), label: 'Dashboard', icon: 'dashboard' },
];

function SidebarIcon({ name }) {
    const iconClass = 'h-5 w-5 shrink-0';
    if (name === 'dashboard') {
        return (
            <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        );
    }
    return null;
}

export default function AdminSidebar({ collapsed, onToggle }) {
    return (
        <aside
            className={`flex flex-col border-r border-gray-200 bg-gray-900 text-white transition-all duration-300 ${
                collapsed ? 'w-16' : 'w-56'
            }`}
        >
            <div className="flex h-14 items-center justify-between border-b border-gray-700 px-3">
                {!collapsed && (
                    <span className="text-sm font-semibold">Admin</span>
                )}
                <button
                    type="button"
                    onClick={onToggle}
                    className="rounded p-2 hover:bg-gray-800"
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    <svg
                        className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>
            </div>
            <nav className="flex-1 space-y-1 p-2">
                {SIDEBAR_LINKS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 ${
                            route().current('admin.dashboard') && item.href === route('admin.dashboard')
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-300'
                        }`}
                    >
                        <SidebarIcon name={item.icon} />
                        {!collapsed && <span>{item.label}</span>}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
