'use client';

import { Menu, Bell, User } from 'lucide-react';

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
            <button
                type="button"
                className="text-gray-500 hover:text-gray-700 lg:hidden"
                onClick={onMenuClick}
            >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <button type="button" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">View notifications</span>
                        <Bell className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                    <button type="button" className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900">
                        <User className="h-6 w-6 rounded-full bg-gray-50 text-gray-500 p-1" />
                        <span className="hidden lg:block">Admin User</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
