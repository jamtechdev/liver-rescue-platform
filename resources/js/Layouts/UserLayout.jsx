import UserFooter from '@/Components/User/UserFooter';
import UserHeader from '@/Components/User/UserHeader';

export default function UserLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <UserHeader />
            <main className="flex-1">{children}</main>
            <UserFooter />
        </div>
    );
}
