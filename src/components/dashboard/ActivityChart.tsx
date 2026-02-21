'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const data = [
    { name: 'Mon', value: 420 },
    { name: 'Tue', value: 380 },
    { name: 'Wed', value: 520 },
    { name: 'Thu', value: 780 },
    { name: 'Fri', value: 610 },
    { name: 'Sat', value: 920 },
    { name: 'Sun', value: 740 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/95 backdrop-blur-2xl p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-indigo-50/50 antialiased animate-in fade-in zoom-in duration-300">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-100 pb-2">{label} Insights</p>
                <div className="flex items-center space-x-3 mt-1">
                    <div className="h-4 w-4 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-lg shadow-indigo-500/20" />
                    <p className="text-2xl font-display font-black text-gray-950 tracking-tighter">
                        {payload[0].value} <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest ml-1">Volume</span>
                    </p>
                </div>
                <div className="mt-3 py-1.5 px-3 rounded-xl bg-indigo-50/50 border border-indigo-100/50">
                    <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-tight">Performance: <span className="font-black">+12.4% Optimal</span></p>
                </div>
            </div>
        );
    }
    return null;
};

export function ActivityChart() {
    return (
        <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 40 }}>
                    <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity={0.8} />
                        </linearGradient>
                        <filter id="barShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                            <feOffset dx="0" dy="4" result="offsetblur" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.2" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="8 8" stroke="#f3f4f6" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 900 }}
                        dy={30}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 900 }}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: 'rgba(79, 70, 229, 0.03)', radius: 10 }}
                        wrapperStyle={{ outline: 'none' }}
                    />
                    <Bar
                        dataKey="value"
                        radius={[10, 10, 10, 10]}
                        barSize={32}
                        animationBegin={0}
                        animationDuration={1500}
                        animationEasing="ease-out"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill="url(#barGradient)"
                                filter="url(#barShadow)"
                                className="hover:opacity-80 transition-opacity cursor-pointer"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
