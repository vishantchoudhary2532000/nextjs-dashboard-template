'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authService } from '@/services/auth';
import { ShieldCheck } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await authService.login(email, password);
            localStorage.setItem('auth_token', res.token);
            localStorage.setItem('user_data', JSON.stringify(res.user));
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#fafafa] relative overflow-hidden font-sans selection:bg-indigo-100 selection:text-indigo-700">
            {/* Decorative backgrounds */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100/30 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/20 blur-[120px] rounded-full -z-10" />

            <div className="w-full max-w-lg px-4 animate-fade-in-up">
                <div className="premium-card bg-white/80 backdrop-blur-xl p-10 sm:p-14 text-center relative overflow-hidden">
                    {/* Top progress bar decoration */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

                    <div className="flex flex-col items-center">
                        <div className="rounded-[2.5rem] bg-indigo-600 p-5 shadow-2xl shadow-indigo-600/30 rotate-3 group hover:rotate-0 transition-all duration-500">
                            <ShieldCheck className="h-10 w-10 text-white" />
                        </div>
                        <h1 className="mt-10 text-4xl sm:text-5xl font-display font-black tracking-tight text-gray-950 leading-tight">
                            Nova<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Admin</span>
                        </h1>
                        <p className="mt-4 text-gray-500 font-medium tracking-tight">
                            Intelligent Administration Workspace
                        </p>

                        <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-widest space-x-2">
                            <span>Test Access</span>
                            <span className="h-1 w-1 rounded-full bg-gray-300" />
                            <span className="text-gray-950 lowercase font-bold">admin@example.com / password</span>
                        </div>
                    </div>

                    <form className="mt-12 space-y-6 text-left" onSubmit={handleLogin}>
                        <div className="space-y-6">
                            <Input
                                label="AUTHORIZATION EMAIL"
                                type="email"
                                required
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="!rounded-2xl !bg-gray-50/50 !border-gray-100 focus:!ring-indigo-100"
                            />
                            <Input
                                label="SECURE ACCESS KEY"
                                type="password"
                                required
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                className="!rounded-2xl !bg-gray-50/50 !border-gray-100 focus:!ring-indigo-100"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-center">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-gray-950 text-white rounded-2xl py-5 font-black uppercase tracking-[0.2em] shadow-2xl shadow-gray-200 hover:bg-indigo-600 hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                            isLoading={isLoading}
                            size="lg"
                        >
                            Establish Connection
                        </Button>
                    </form>

                    <p className="mt-10 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Handcrafted by Nova Ecosystem &copy; 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
