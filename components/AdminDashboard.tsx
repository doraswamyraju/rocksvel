

import React, { useEffect, useState } from 'react';
import { Mail, Phone, Briefcase, Search, LayoutDashboard, LogOut, CheckCircle2, CircleDashed, XCircle, ArrowUpRight, Filter, ChevronDown, Bell, Menu, X, Trash2, Eye, GraduationCap, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Enquiry {
    _id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    type: 'general' | 'planner' | 'institute' | 'crash-course';
    plannerData?: any;
    courseData?: {
        courseTitle: string;
        price: string;
        nextBatch: string;
    };
    createdAt: string;
    status: string;
}

export const AdminDashboard: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<string>('all');
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

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/enquiries/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                setEnquiries(prev => prev.map(e => e._id === id ? { ...e, status: newStatus } : e));
            }
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const deleteEnquiry = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this enquiry? This cannot be undone.")) return;
        try {
            const res = await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setEnquiries(prev => prev.filter(e => e._id !== id));
            }
        } catch (err) {
            console.error("Failed to delete", err);
        }
    };

    const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

    const filteredEnquiries = enquiries.filter(enq => {
        const matchesSearch = enq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            enq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (enq.company && enq.company.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesFilter = filterType === 'all' || enq.type === filterType;

        return matchesSearch && matchesFilter;
    });

    const stats = {
        total: enquiries.length,
        smartPlans: enquiries.filter(e => e.type === 'planner').length,
        crashCourses: enquiries.filter(e => e.type === 'crash-course').length,
        institute: enquiries.filter(e => e.type === 'institute').length,
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
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-900 text-white hidden md:flex flex-col fixed h-full z-20">
                <div className="p-6">
                    <h2 className="text-2xl font-bold tracking-tight">Rocksvel<span className="text-cyan-400">.</span></h2>
                    <p className="text-xs text-brand-300 uppercase tracking-widest mt-1">Admin Console</p>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <button onClick={() => setFilterType('all')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${filterType === 'all' ? 'bg-brand-800 text-white border border-brand-700' : 'text-brand-200 hover:bg-brand-800'}`}>
                        <LayoutDashboard size={20} /> All Enquiries
                    </button>
                    <button onClick={() => setFilterType('planner')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${filterType === 'planner' ? 'bg-brand-800 text-white border border-brand-700' : 'text-brand-200 hover:bg-brand-800'}`}>
                        <Briefcase size={20} /> Smart Plans
                    </button>
                    <button onClick={() => setFilterType('crash-course')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${filterType === 'crash-course' ? 'bg-brand-800 text-white border border-brand-700' : 'text-brand-200 hover:bg-brand-800'}`}>
                        <Zap size={20} /> Crash Courses
                    </button>
                    <button onClick={() => setFilterType('institute')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${filterType === 'institute' ? 'bg-brand-800 text-white border border-brand-700' : 'text-brand-200 hover:bg-brand-800'}`}>
                        <GraduationCap size={20} /> Institute
                    </button>
                    <a href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-brand-200 hover:bg-brand-800 hover:text-white rounded-lg transition-colors mt-8">
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
            <main className="md:ml-64 min-h-screen transition-all duration-300">
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Crash Courses</p>
                                    <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.crashCourses}</h3>
                                </div>
                                <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                                    <Zap size={20} />
                                </div>
                            </div>
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
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-gray-800">Filtered Enquiries: {filterType === 'all' ? 'All' : filterType.toUpperCase()}</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Client</th>
                                        <th className="px-6 py-4">Contact Info</th>
                                        <th className="px-6 py-4">Inquiry Type</th>
                                        <th className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredEnquiries.length > 0 ? (
                                        filteredEnquiries.map((enq) => (
                                            <tr key={enq._id} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="px-6 py-4 align-top">
                                                    <select
                                                        value={enq.status}
                                                        onChange={(e) => updateStatus(enq._id, e.target.value)}
                                                        className={`block w-full rounded-md border-0 py-1.5 pl-2 pr-6 text-xs font-medium ring-1 ring-inset focus:ring-2 focus:ring-brand-600 sm:leading-6 ${enq.status === 'new' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                                                            enq.status === 'contacted' ? 'bg-blue-50 text-blue-700 ring-blue-600/20' :
                                                                'bg-gray-50 text-gray-600 ring-gray-500/10'
                                                            }`}
                                                    >
                                                        <option value="new">New</option>
                                                        <option value="contacted">Contacted</option>
                                                        <option value="closed">Closed</option>
                                                    </select>
                                                    <div className="text-[10px] text-gray-400 mt-2 text-center">
                                                        {new Date(enq.createdAt).toLocaleDateString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-top">
                                                    <div className="font-bold text-gray-900 text-sm whitespace-nowrap">{enq.name}</div>
                                                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                        <Briefcase size={12} className="shrink-0" /> {enq.company || 'N/A'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-top">
                                                    <div className="space-y-1.5">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                                                            <Mail size={14} className="opacity-60" />
                                                            <span className="truncate max-w-[200px]" title={enq.email}>{enq.email}</span>
                                                        </div>
                                                        {enq.phone && (
                                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                                <Phone size={14} className="opacity-60" /> {enq.phone}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-top">
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${enq.type === 'planner'
                                                        ? 'bg-purple-50 text-purple-700 border-purple-100'
                                                        : enq.type === 'crash-course' ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                                            : enq.type === 'institute' ? 'bg-orange-50 text-orange-700 border-orange-200'
                                                                : 'bg-gray-100 text-gray-700 border-gray-200'
                                                        }`}>
                                                        {enq.type}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 align-top">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => setSelectedEnquiry(enq)}
                                                            className="p-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
                                                            title="View Details"
                                                        >
                                                            <Eye size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => deleteEnquiry(enq._id)}
                                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
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

            {/* View Details Modal */}
            {selectedEnquiry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Enquiry Details</h3>
                                <p className="text-sm text-gray-500">ID: {selectedEnquiry._id}</p>
                            </div>
                            <button onClick={() => setSelectedEnquiry(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>
                        <div className="p-8 overflow-y-auto">
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Client Name</label>
                                    <p className="text-gray-900 font-medium text-lg">{selectedEnquiry.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company</label>
                                    <p className="text-gray-900 font-medium text-lg">{selectedEnquiry.company || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                    <p className="text-gray-600">{selectedEnquiry.email}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</label>
                                    <p className="text-gray-600">{selectedEnquiry.phone || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</label>
                                    <div className="mt-1">
                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${selectedEnquiry.status === 'new' ? 'bg-green-100 text-green-700 border-green-200' :
                                            selectedEnquiry.status === 'contacted' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                                'bg-gray-100 text-gray-700 border-gray-200'
                                            }`}>
                                            {selectedEnquiry.status.charAt(0).toUpperCase() + selectedEnquiry.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date</label>
                                    <p className="text-gray-600">{new Date(selectedEnquiry.createdAt).toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                                    {selectedEnquiry.type === 'planner' ? 'Smart Plan Details' :
                                        selectedEnquiry.type === 'crash-course' ? 'Crash Course Enrollment' : 'Message'}
                                </label>

                                {selectedEnquiry.type === 'planner' && selectedEnquiry.plannerData ? (
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                                                <Briefcase size={16} /> Selected Modules
                                            </h5>
                                            <ul className="space-y-2">
                                                {selectedEnquiry.plannerData.selectedModules?.map((m: any, i: number) => (
                                                    <li key={i} className="flex justify-between items-center bg-white p-3 rounded border border-gray-200 shadow-sm text-sm">
                                                        <span className="font-medium text-gray-800">{m.title}</span>
                                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{m.duration}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {selectedEnquiry.plannerData.customInstructions && (
                                            <div>
                                                <h5 className="font-semibold text-gray-700 mb-2">Custom Requirements</h5>
                                                <div className="bg-white p-4 rounded border border-gray-200 text-gray-600 italic text-sm">
                                                    "{selectedEnquiry.plannerData.customInstructions}"
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : selectedEnquiry.type === 'crash-course' && selectedEnquiry.courseData ? (
                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                            <div className="text-sm font-bold text-gray-900 mb-1">{selectedEnquiry.courseData.courseTitle}</div>
                                            <div className="text-xs text-gray-500">{selectedEnquiry.courseData.nextBatch} | {selectedEnquiry.courseData.price}</div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                                            Message: {selectedEnquiry.message}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {selectedEnquiry.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                            <button
                                onClick={() => setSelectedEnquiry(null)}
                                className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                            >
                                Close
                            </button>
                            <a
                                href={`mailto:${selectedEnquiry.email}`}
                                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg shadow-lg shadow-brand-500/20 transition-all flex items-center gap-2"
                            >
                                <Mail size={18} /> Reply via Email
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
