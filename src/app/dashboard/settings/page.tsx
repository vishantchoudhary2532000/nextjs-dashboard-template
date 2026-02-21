'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';

export default function SettingsPage() {
    const [isSaving, setIsSaving] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        // Mock save delay
        setTimeout(() => {
            setIsSaving(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                    <p className="mt-1 text-sm text-gray-500">Update your account details and email address.</p>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Input label="First name" defaultValue="Admin" />
                            <Input label="Last name" defaultValue="User" />
                            <div className="sm:col-span-2">
                                <Input label="Email address" type="email" defaultValue="admin@example.com" />
                            </div>
                        </div>

                        {success && (
                            <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm font-medium">
                                Settings saved successfully!
                            </div>
                        )}

                        <div className="flex justify-end border-t border-gray-200 pt-6">
                            <Button type="submit" isLoading={isSaving} className="gap-2">
                                <Save className="h-4 w-4" /> Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
