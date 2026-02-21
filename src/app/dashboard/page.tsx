import { Users, DollarSign, Activity, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
    const stats = [
        { name: 'Total Users', value: '1,432', icon: Users, change: '+12.5%', changeType: 'positive' },
        { name: 'Revenue', value: '$45,231', icon: DollarSign, change: '+8.2%', changeType: 'positive' },
        { name: 'Active Sessions', value: '432', icon: Activity, change: '-2.4%', changeType: 'negative' },
        { name: 'Bounce Rate', value: '24.5%', icon: TrendingUp, change: '-4.1%', changeType: 'positive' },
    ];

    return (
        <div className="space-y-6 border-transparent">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                    <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                                </div>
                                <div className="rounded-md bg-indigo-50 p-3">
                                    <Icon className="h-6 w-6 text-indigo-600" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.change}
                                </span>
                                <span className="text-sm text-gray-500 ml-2">from last month</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm border border-gray-100 min-h-[400px]">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
                    <p className="text-gray-500 text-sm">Activity Chart Placeholder</p>
                </div>
            </div>
        </div>
    );
}
