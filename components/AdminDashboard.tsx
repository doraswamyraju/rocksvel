

import React, { useEffect, useState } from 'react';
import { Mail, Phone, Briefcase, Search, LayoutDashboard, LogOut, CheckCircle2, CircleDashed, XCircle, ArrowUpRight, Filter, ChevronDown, Bell, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Load auth state from session storage for persistence on refresh
    useEffect(() => {
        const auth = sessionStorage.getItem('isAdminAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
            fetchEnquiries();
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
            sessionStorage.setItem('isAdminAuth', 'true');
            fetchEnquiries();
        } else {
            alert("Invalid Password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('isAdminAuth');
    };

    const fetchEnquiries = async () => {
        setLoading(true);
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

    const filteredEnquiries = enquiries.filter(enq =>
        enq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (enq.company && enq.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const stats = {
        total: enquiries.length,
        smartPlans: enquiries.filter(e => e.type === 'planner').length,
        newToday: enquiries.filter(e => {
            const date = new Date(e.createdAt);
            const today = new Date();
            return date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();
        }).length
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-900 clip-diagonal opacity-10"></div>
                <div className="w-full max-w-md p-8 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-cyan-500">Rocksvel Admin</h1>
                            <p className="text-gray-500 mt-2">Enter your credentials to access the dashboard</p>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-500/30">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-900 text-white hidden md:flex flex-col fixed h-full z-20">
                <div className="p-6">
                    <h2 className="text-2xl font-bold tracking-tight">Rocksvel<span className="text-cyan-400">.</span></h2>
                    <p className="text-xs text-brand-300 uppercase tracking-widest mt-1">Admin Console</p>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-brand-800 rounded-lg text-white font-medium shadow-sm transition-all border border-brand-700">
                        <LayoutDashboard size={20} /> Dashboard
                    </a>
                    <a href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-brand-200 hover:bg-brand-800 hover:text-white rounded-lg transition-colors">
                        <ArrowUpRight size={20} /> View Website
                    </a>
                </nav>
                <div className="p-4 border-t border-brand-800">
                    <button onClick={handleLogout} className="flex items-center gap-2 text-brand-300 hover:text-white transition-colors text-sm w-full px-4 py-2">
                        <LogOut size={16} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 min-w-0">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-10 px-8 py-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Dashboard Overview</h1>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-64 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={fetchEnquiries} className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors" title="Refresh">
                            <CircleDashed size={20} className={loading ? "animate-spin" : ""} />
                        </button>
                        <div className="h-8 w-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">A</div>
                    </div>
                </header>

                <div className="p-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Total Enquiries</p>
                                    <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</h3>
                                </div>
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <Mail size={20} />
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">All time received</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Smart Plans</p>
                                    <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.smartPlans}</h3>
                                </div>
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <Briefcase size={20} />
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">Generated via Smart Planner</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">New Today</p>
                                    <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.newToday}</h3>
                                </div>
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                    <Bell size={20} />
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">Received in last 24h</div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-gray-800">Recent Enquiries</h3>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                    <Filter size={14} /> Filter
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Client</th>
                                        <th className="px-6 py-4">Contact Info</th>
                                        <th className="px-6 py-4">Inquiry Type</th>
                                        <th className="px-6 py-4">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredEnquiries.length > 0 ? (
                                        filteredEnquiries.map((enq) => (
                                            <tr key={enq._id} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="px-6 py-4 align-top w-24">
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                                        New
                                                    </span>
                                                    <div className="text-[10px] text-gray-400 mt-2">
                                                        {new Date(enq.createdAt).toLocaleDateString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-top w-48">
                                                    <div className="font-bold text-gray-900 text-sm">{enq.name}</div>
                                                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                        <Briefcase size={12} className="shrink-0" /> {enq.company || 'N/A'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-top w-48">
                                                    <div className="space-y-1.5">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                                                            <Mail size={14} className="opacity-60" />
                                                            <span className="truncate max-w-[140px]" title={enq.email}>{enq.email}</span>
                                                        </div>
                                                        {enq.phone && (
                                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                                <Phone size={14} className="opacity-60" /> {enq.phone}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-top w-32">
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${enq.type === 'planner'
                                                        ? 'bg-purple-50 text-purple-700 border-purple-100'
                                                        : 'bg-gray-100 text-gray-700 border-gray-200'
                                                        }`}>
                                                        {enq.type === 'planner' ? 'Smart Plan' : 'General'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 align-top">
                                                    {enq.type === 'planner' && enq.plannerData ? (
                                                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
                                                            <div className="font-semibold text-purple-700 mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
                                                                <CheckCircle2 size={12} /> Generated Curriculum
                                                            </div>
                                                            <ul className="list-disc pl-4 space-y-1 text-gray-600 text-xs mb-3">
                                                                {enq.plannerData.selectedModules?.map((m: any, i: number) => (
                                                                    <li key={i}>{m.title} <span className="text-gray-400">({m.duration})</span></li>
                                                                ))}
                                                            </ul>
                                                            {enq.plannerData.customInstructions && (
                                                                <div className="text-xs italic text-gray-500 bg-white p-2 rounded border border-gray-100">
                                                                    "{enq.plannerData.customInstructions}"
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="text-gray-600 text-sm leading-relaxed max-w-sm">
                                                            "{enq.message}"
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="py-12 text-center text-gray-500">
                                                <div className="flex flex-col items-center">
                                                    <Search size={48} className="text-gray-200 mb-4" />
                                                    <p>No enquiries found matching your search.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
