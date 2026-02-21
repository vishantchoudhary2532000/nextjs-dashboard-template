'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, LogOut, Menu, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
import { authService } from '../../services/auth';
import { useRouter } from 'next/navigation';

export function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        authService.logout();
        router.push('/login');
    };

    const navItems = [
        { name: 'Dashboard', href: '/dashboard', icon: Home },
        { name: 'Users', href: '/dashboard/users', icon: Users },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed inset-y-0 left-0 z-30 w-80 transform premium-sidebar text-white transition-all duration-500 ease-in-out lg:static lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="flex h-24 items-center px-10 border-b border-white/5 bg-gray-950/50 backdrop-blur-sm">
                    <Link href="/dashboard" className="flex items-center space-x-4 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 p-2.5 rounded-2xl shadow-2xl shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/20">
                                <ShieldCheckIcon className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <span className="text-2xl font-display font-black tracking-tighter transition-all duration-300 group-hover:tracking-tight">
                            Nova<span className="text-indigo-400">Admin</span>
                        </span>
                    </Link>
                </div>

                <nav className="mt-8 flex flex-col gap-2 px-6">
                    <p className="px-2 mb-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Menu Overview</p>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                  flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300
                  ${isActive ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                `}
                            >
                                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                {item.name}
                            </Link>
                        );
                    })}

                    <button
                        onClick={handleLogout}
                        className="mt-12 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-gray-500 transition-all duration-300 hover:bg-white/5 hover:text-white"
                    >
                        <LogOut className="h-5 w-5 text-gray-600" />
                        Logout
                    </button>
                </nav>
            </div>
        </>
    );
}
