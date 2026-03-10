import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import UserLogo from './UserLogo';
import UserNavLink from './UserNavLink';

const NAV_ITEMS = [
    { href: route('home'), label: 'Home' },
    { href: route('our-mission'), label: 'Our Mission' },
    { href: route('add-listing'), label: 'Add New Listing' },
    { href: route('forums'), label: 'Forums' },
    { href: route('recipe'), label: 'Recipe' },
    { href: route('restaurants'), label: 'Restaurants' },
    { href: route('find-your-match'), label: 'Find Your Match' },
    { href: route('support'), label: 'Support' },
];

export default function UserHeader() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-sky-100 bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <UserLogo />

                <nav className="hidden items-center gap-6 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <UserNavLink key={item.href} href={item.href}>
                            {item.label}
                        </UserNavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            {user.roles?.includes('admin') && (
                                <Link
                                    href={route('admin.dashboard')}
                                    className="text-sm font-medium text-sky-900 hover:text-sky-700"
                                >
                                    Admin
                                </Link>
                            )}
                            <Link
                                href={route('dashboard')}
                                className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
                            >
                                Dashboard
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="hidden text-sm font-medium text-sky-900 hover:text-sky-700 sm:block"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    <button
                        type="button"
                        className="rounded p-2 text-sky-900 lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden">
                    <nav className="flex flex-col gap-3">
                        {NAV_ITEMS.map((item) => (
                            <UserNavLink
                                key={item.href}
                                href={item.href}
                                className="block py-1"
                            >
                                {item.label}
                            </UserNavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
