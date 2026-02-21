'use client';

import { Menu, Bell, User } from 'lucide-react';

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <header className="glass-effect sticky top-0 z-40 flex h-24 shrink-0 items-center justify-between border-b border-gray-100/80 bg-white/80 px-4 sm:px-6 lg:px-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] antialiased">
            <button
                type="button"
                className="text-gray-500 hover:text-indigo-600 transition-all duration-300 lg:hidden"
                onClick={onMenuClick}
            >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-7 w-7" aria-hidden="true" />
            </button>

            <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-12">
                <div className="flex items-center gap-x-8 lg:gap-x-10">
                    <button type="button" className="relative text-gray-400 hover:text-indigo-600 transition-all duration-500 group">
                        <span className="sr-only">View notifications</span>
                        <Bell className="h-6 w-6 stroke-[1.5]" aria-hidden="true" />
                        <span className="absolute -top-1 -right-1 block h-2.5 w-2.5 rounded-full bg-indigo-500 ring-2 ring-white group-hover:scale-125 transition-transform shadow-sm" />
                    </button>

                    <div className="hidden lg:block lg:h-10 lg:w-px lg:bg-gradient-to-b lg:from-transparent lg:via-gray-100 lg:to-transparent" aria-hidden="true" />

                    <button type="button" className="flex items-center gap-x-4 group p-1 rounded-[1.25rem] hover:bg-gray-50 transition-all duration-500">
                        <div className="h-11 w-11 flex items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-200 group-hover:scale-105 transition-transform duration-500 ring-4 ring-indigo-50">
                            <User className="h-6 w-6" />
                        </div>
                        <div className="hidden lg:flex flex-col items-start leading-tight space-y-0.5">
                            <span className="text-sm font-display font-black text-gray-950 tracking-tight">Admin Principal</span>
                            <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em]">Authorized Node</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
