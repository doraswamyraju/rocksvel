import React, { useEffect, useState } from 'react';
import { Mail, Phone, Calendar, User, MessageSquare, Briefcase, FileText, CheckCircle, XCircle } from 'lucide-react';

interface Enquiry {
    _id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    type: 'general' | 'planner';
    plannerData?: any;
    createdAt: string;
    status: string;
}

export const AdminDashboard: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') { // Simple hardcoded password for now
            setIsAuthenticated(true);
            fetchEnquiries();
        } else {
            alert("Invalid Password");
        }
    };

    const fetchEnquiries = async () => {
        try {
            const res = await fetch('/api/enquiries');
            if (res.ok) {
                const data = await res.json();
                setEnquiries(data);
            }
        } catch (err) {
            console.error("Failed to fetch", err);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Login</h2>
                    <input
                        type="password"
                        className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Enquiry Dashboard</h1>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold text-gray-600">Date</th>
                                        <th className="p-4 font-semibold text-gray-600">Name / Company</th>
                                        <th className="p-4 font-semibold text-gray-600">Contact</th>
                                        <th className="p-4 font-semibold text-gray-600">Type</th>
                                        <th className="p-4 font-semibold text-gray-600">Message / Plan Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {enquiries.map((enq) => (
                                        <tr key={enq._id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                                                {new Date(enq.createdAt).toLocaleDateString()}
                                                <br />
                                                <span className="text-xs">{new Date(enq.createdAt).toLocaleTimeString()}</span>
                                            </td>
                                            <td className="p-4">
                                                <div className="font-semibold text-gray-900">{enq.name}</div>
                                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                                    <Briefcase size={12} /> {enq.company || '-'}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-sm space-y-1">
                                                    <div className="flex items-center gap-2 text-gray-700">
                                                        <Mail size={14} className="text-gray-400" /> {enq.email}
                                                    </div>
                                                    {enq.phone && (
                                                        <div className="flex items-center gap-2 text-gray-700">
                                                            <Phone size={14} className="text-gray-400" /> {enq.phone}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${enq.type === 'planner' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                                    {enq.type === 'planner' ? 'Smart Plan' : 'General'}
                                                </span>
                                            </td>
                                            <td className="p-4 max-w-md">
                                                {enq.type === 'planner' && enq.plannerData ? (
                                                    <div className="bg-gray-50 p-3 rounded border text-sm">
                                                        <div className="font-semibold text-purple-700 mb-1">Generated Curriculum:</div>
                                                        <ul className="list-disc pl-4 space-y-1 text-gray-600">
                                                            {enq.plannerData.selectedModules?.map((m: any, i: number) => (
                                                                <li key={i}>{m.title} ({m.duration})</li>
                                                            ))}
                                                        </ul>
                                                        {enq.plannerData.customInstructions && (
                                                            <div className="mt-2 text-xs italic text-gray-500">Note: {enq.plannerData.customInstructions}</div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="text-gray-700 text-sm">{enq.message}</div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {enquiries.length === 0 && (
                            <div className="p-8 text-center text-gray-500">No enquiries found yet.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
