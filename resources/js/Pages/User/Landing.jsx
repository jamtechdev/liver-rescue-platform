import UserLayout from '@/Layouts/UserLayout';
import FeatureSection from '@/Components/User/FeatureSection';
import HeroSection from '@/Components/User/HeroSection';
import { Head } from '@inertiajs/react';

export default function Landing() {
    return (
        <UserLayout>
            <Head title="Liver Rescue Co. – Join a Community Built on Understanding & Healing" />
            <HeroSection />
            <FeatureSection />
        </UserLayout>
    );
}
