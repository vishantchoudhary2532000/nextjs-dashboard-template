'use client';

import { Users, DollarSign, Activity, TrendingUp, Sparkles } from 'lucide-react';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { motion, Variants } from 'framer-motion';

export default function DashboardPage() {
    const stats = [
        { name: 'Market Reach', value: '42.8k', icon: Users, change: '+24.5%', changeType: 'positive' },
        { name: 'Net Equity', value: '$892k', icon: DollarSign, change: '+18.2%', changeType: 'positive' },
        { name: 'Signal Pulse', value: '1.2ms', icon: Activity, change: '-4.2%', changeType: 'negative' },
        { name: 'Momentum', value: '98.4%', icon: TrendingUp, change: '+14.1%', changeType: 'positive' },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="h-full flex flex-col gap-6 overflow-hidden"
        >
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0">
                <div className="space-y-1">
                    <motion.div variants={itemVariants} className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] shadow-sm">
                        <Sparkles className="h-3 w-3 mr-2" />
                        Intelligence Augmented
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-3xl font-display font-black tracking-tight text-gray-950">
                        Operational <span className="text-indigo-600">Nova</span>
                    </motion.h1>
                </div>
                <motion.div variants={itemVariants} className="flex items-center space-x-4 pb-1 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                    <span className="text-gray-950 border-b-2 border-indigo-500 pb-1 -mb-[5px]">Overview</span>
                    <span className="hover:text-indigo-600 cursor-pointer transition-colors pb-1">Forensics</span>
                    <span className="hover:text-indigo-600 cursor-pointer transition-colors pb-1">Resources</span>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 shrink-0">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.name}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.01 }}
                            className="premium-card p-6 group relative overflow-hidden cursor-default border border-gray-100/50"
                        >
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/10 transition-all duration-700" />

                            <div className="flex flex-col space-y-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.15em]">{stat.name}</p>
                                    <div className="rounded-xl bg-gray-50 text-gray-400 p-2 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Icon className="h-4 w-4 stroke-[1.5]" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-3xl font-display font-black text-gray-950 tracking-tighter">{stat.value}</p>
                                    <div className="flex items-center space-x-2">
                                        <span className={`text-[9px] font-black tracking-widest uppercase ${stat.changeType === 'positive' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            {stat.change}
                                        </span>
                                        <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Velocity</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Chart Section */}
            <motion.div variants={itemVariants} className="premium-card p-8 flex-1 min-h-0 relative overflow-hidden flex flex-col border border-gray-100/50">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                    <TrendingUp className="w-48 h-48 text-gray-950" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 shrink-0 relative z-10">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-display font-black text-gray-950 tracking-tight">Predictive <span className="text-indigo-600">Dynamics</span></h2>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">Cross-platform synchronization and algorithmic throughput.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center space-x-3 bg-indigo-50/50 px-4 py-2 rounded-xl border border-indigo-100/50">
                            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">Real-time Sync</span>
                        </div>
                        <button className="text-[9px] font-black text-white uppercase tracking-widest bg-gray-950 px-5 py-2.5 rounded-xl shadow-lg hover:bg-indigo-600 transition-all duration-300">Audit</button>
                    </div>
                </div>

                <div className="flex-1 min-h-0 relative z-10">
                    <ActivityChart />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between shrink-0 relative z-10">
                    <div className="flex items-center gap-10">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">Integrity</span>
                            <span className="text-xl font-display font-black text-gray-950">99.8%</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">Latency</span>
                            <span className="text-xl font-display font-black text-gray-950">0.4s</span>
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">Condition</span>
                            <span className="text-xl font-display font-black text-emerald-500 tracking-tighter uppercase italic">Optimal</span>
                        </div>
                    </div>

                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group relative">
                                <div className="w-10 h-10 rounded-xl bg-white ring-4 ring-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden hover:z-20 hover:-translate-y-1 transition-all">
                                    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                                        <Activity className="h-4 w-4 text-indigo-400 opacity-60" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
