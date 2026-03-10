import { Link } from '@inertiajs/react';

export default function UserNavLink({ href, children, className = '' }) {
    return (
        <Link
            href={href}
            className={`text-sm font-medium text-sky-900 hover:text-sky-700 ${className}`}
        >
            {children}
        </Link>
    );
}
