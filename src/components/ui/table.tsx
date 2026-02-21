import React from 'react';

export function Table({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`overflow-x-auto rounded-lg border border-gray-200 bg-white ${className || ''}`}>
            <table className="min-w-full divide-y divide-gray-200">
                {children}
            </table>
        </div>
    );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
    return <thead className="bg-gray-50">{children}</thead>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
    return <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>;
}

export function TableRow({ children, className }: { children: React.ReactNode; className?: string }) {
    return <tr className={`hover:bg-gray-50 ${className || ''}`}>{children}</tr>;
}

export function TableHead({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <th
            scope="col"
            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className || ''}`}
        >
            {children}
        </th>
    );
}

export function TableCell({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${className || ''}`}>
            {children}
        </td>
    );
}
