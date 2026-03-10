import UserFooter from '@/Components/User/UserFooter';
import UserHeader from '@/Components/User/UserHeader';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <UserHeader />
            <main className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="w-full max-w-md rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
                    {children}
                </div>
            </main>
            <UserFooter />
        </div>
    );
}
