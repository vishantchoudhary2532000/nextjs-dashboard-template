'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { authService } from '../../services/auth';
import { Loader2 } from 'lucide-react';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMounting, setIsMounting] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Client-side simple protected route behavior
        if (!authService.isAuthenticated()) {
            router.replace('/login');
        } else {
            setIsMounting(false);
        }
    }, [router]);

    if (isMounting) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-gray-50">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
            </div>
        );
    }

    return (
        <div className="flex bg-gray-50 h-screen overflow-hidden">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 flex flex-col px-4 sm:px-6 lg:px-12 py-8 bg-[#fafafa]/50 overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
