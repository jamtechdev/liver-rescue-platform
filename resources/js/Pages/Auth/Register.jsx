import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const [currentStep, setCurrentStep] = useState(1);

    const { data, setData, post, processing, errors, reset } = useForm({
        // Step 1: Account + Role
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        role: 'member', // 'member', 'practitioner', 'service-provider'

        // Step 2: Basic Profile
        age: '',
        gender: '',
        country: 'India',
        state: '',
        city: '',

        // Step 3: Healing Journey
        symptoms: '',
        healing_stage: '',
        mm_cleanse_days: '',
        bio: '',

        // Step 4: Photos (admin approval ke liye)
        profile_photo: null,
        healing_proof_photo: null,
    });

    const nextStep = () => {
        
        if (currentStep < 4) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            forceFormData: true, // important for file uploads
            onSuccess: () => {
                reset('password', 'password_confirmation');
            },
            onError: () => {
                // errors already set ho jayenge
            },
        });
    };

    const progress = ((currentStep / 4) * 100).toFixed(0);

    return (
        <GuestLayout>
            <Head title="Register - Healing Community" />

            <div className="max-w-2xl mx-auto px-4 py-8">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div
                                style={{ width: `${progress}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-500"
                            ></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-600">
                        <span className={currentStep >= 1 ? 'text-indigo-600' : ''}>Account</span>
                        <span className={currentStep >= 2 ? 'text-indigo-600' : ''}>Profile</span>
                        <span className={currentStep >= 3 ? 'text-indigo-600' : ''}>Healing</span>
                        <span className={currentStep >= 4 ? 'text-indigo-600' : ''}>Photos</span>
                    </div>
                </div>

                <form onSubmit={currentStep === 4 ? submit : (e) => { e.preventDefault(); nextStep(); }}>
                    {/* ────────────── STEP 1 ────────────── */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

                            <div>
                                <InputLabel htmlFor="name" value="Full Name *" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full"
                                    required
                                    autoFocus
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email Address *" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="mt-1 block w-full"
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="phone" value="Phone Number (optional)" />
                                <TextInput
                                    id="phone"
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.phone} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password" value="Password *" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="mt-1 block w-full"
                                    required
                                    autoComplete="new-password"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password *" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    className="mt-1 block w-full"
                                    required
                                    autoComplete="new-password"
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel value="Register as *" />
                                <select
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    required
                                >
                                    <option value="member">Normal Member</option>
                                    <option value="practitioner">Practitioner (Consultation Provider)</option>
                                    <option value="service-provider">Service Provider / Support</option>
                                </select>
                                <InputError message={errors.role} className="mt-2" />
                            </div>
                        </div>
                    )}

                    {/* ────────────── STEP 2 ────────────── */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-center mb-6">Basic Information</h2>

                            <div>
                                <InputLabel htmlFor="age" value="Age *" />
                                <TextInput
                                    id="age"
                                    type="number"
                                    min="18"
                                    value={data.age}
                                    onChange={(e) => setData('age', e.target.value)}
                                    className="mt-1 block w-full"
                                    required
                                />
                                <InputError message={errors.age} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel value="Gender *" />
                                <select
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer_not_to_say">Prefer not to say</option>
                                </select>
                                <InputError message={errors.gender} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="country" value="Country *" />
                                <TextInput
                                    id="country"
                                    value={data.country}
                                    onChange={(e) => setData('country', e.target.value)}
                                    className="mt-1 block w-full"
                                    required
                                />
                                <InputError message={errors.country} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="state" value="State / Province" />
                                <TextInput
                                    id="state"
                                    value={data.state}
                                    onChange={(e) => setData('state', e.target.value)}
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.state} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="city" value="City" />
                                <TextInput
                                    id="city"
                                    value={data.city}
                                    onChange={(e) => setData('city', e.target.value)}
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.city} className="mt-2" />
                            </div>
                        </div>
                    )}

                    {/* ────────────── STEP 3 ────────────── */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-center mb-6">Your Healing Journey</h2>

                            <div>
                                <InputLabel htmlFor="symptoms" value="Current Symptoms (comma separated)" />
                                <textarea
                                    id="symptoms"
                                    value={data.symptoms}
                                    onChange={(e) => setData('symptoms', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    rows={3}
                                    placeholder="e.g. fatigue, brain fog, joint pain"
                                />
                                <InputError message={errors.symptoms} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel value="Healing Stage" />
                                <select
                                    value={data.healing_stage}
                                    onChange={(e) => setData('healing_stage', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                >
                                    <option value="">Select Stage</option>
                                    <option value="early">Early</option>
                                    <option value="middle">Middle</option>
                                    <option value="advanced">Advanced</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="unknown">Not Sure / Unknown</option>
                                </select>
                                <InputError message={errors.healing_stage} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="mm_cleanse_days" value="How many days following MM Cleanse?" />
                                <TextInput
                                    id="mm_cleanse_days"
                                    type="number"
                                    min="0"
                                    value={data.mm_cleanse_days}
                                    onChange={(e) => setData('mm_cleanse_days', e.target.value)}
                                    className="mt-1 block w-full"
                                    placeholder="0 if not following"
                                />
                                <InputError message={errors.mm_cleanse_days} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="bio" value="Short Bio / About Me (optional)" />
                                <textarea
                                    id="bio"
                                    value={data.bio}
                                    onChange={(e) => setData('bio', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    rows={4}
                                    placeholder="Tell us a little about yourself..."
                                />
                                <InputError message={errors.bio} className="mt-2" />
                            </div>
                        </div>
                    )}

                    {/* ────────────── STEP 4 ────────────── */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-center mb-6">Upload Photos</h2>
                            <p className="text-center text-gray-600 mb-6">
                                Clear photos required. Admin will review for approval (safety & quality).
                            </p>

                            <div>
                                <InputLabel value="Profile Photo * (clear face photo)" />
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/jpg"
                                    onChange={(e) => setData('profile_photo', e.target.files[0] || null)}
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                    required
                                />
                                <InputError message={errors.profile_photo} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel value="Healing Proof Photo (optional – progress photo, report etc.)" />
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/jpg"
                                    onChange={(e) => setData('healing_proof_photo', e.target.files[0] || null)}
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                />
                                <InputError message={errors.healing_proof_photo} className="mt-2" />
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-10 flex items-center justify-between">
                        {currentStep > 1 && (
                            <PrimaryButton
                                type="button"
                                onClick={prevStep}
                                className="bg-gray-500 hover:bg-gray-600"
                            >
                                ← Back
                            </PrimaryButton>
                        )}

                        {currentStep < 4 ? (
                            <PrimaryButton type="submit" className="ml-auto">
                                Next →
                            </PrimaryButton>
                        ) : (
                            <PrimaryButton
                                type="submit"
                                className="ml-auto bg-green-600 hover:bg-green-700"
                                disabled={processing}
                            >
                                {processing ? 'Creating Account...' : 'Complete Registration'}
                            </PrimaryButton>
                        )}
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href={route('login')} className="text-indigo-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
