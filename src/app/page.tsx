"use client";

import React, { useState, useEffect } from 'react';

type DashboardData = {
  upcomingEvents: {
    id: number;
    name: string;
    date: string;
    venue: string | null;
    status: string;
  }[];
  recentInvoices: {
    id: number;
    invoiceNumber: string;
    customer: { name: string };
    amount: number;
    issueDate: string;
    status: string;
  }[];
  stats: {
    totalRevenue: number;
    overdueCount: number;
  };
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/dashboard');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading dashboard...</div>;
  if (!data) return <div className="p-8">Error loading data.</div>;

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-background-light dark:bg-background-dark">
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Good Morning, Sarah</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here&apos;s what&apos;s happening in your business today.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-primary hover:bg-opacity-90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            Plan Event
          </button>
          <button className="bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] hover:bg-gray-50 dark:hover:bg-[#24343b] px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            New Rental
          </button>
          <button className="bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] hover:bg-gray-50 dark:hover:bg-[#24343b] px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">content_cut</span>
            Seamstress
          </button>
        </div>
      </section>

      {/* Stats Summary - Added for context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
         <div className="bg-white dark:bg-[#1a2a30] p-6 rounded-2xl border border-[#dbe3e6] dark:border-[#2d3e46] shadow-sm flex items-center justify-between">
            <div>
               <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Revenue (Paid)</p>
               <p className="text-2xl font-bold text-slate-900 dark:text-white">${data.stats.totalRevenue.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
               <span className="material-symbols-outlined">payments</span>
            </div>
         </div>
         <div className="bg-white dark:bg-[#1a2a30] p-6 rounded-2xl border border-[#dbe3e6] dark:border-[#2d3e46] shadow-sm flex items-center justify-between">
            <div>
               <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Overdue Invoices</p>
               <p className="text-2xl font-bold text-slate-900 dark:text-white">{data.stats.overdueCount}</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600">
               <span className="material-symbols-outlined">warning</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] rounded-2xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-[#dbe3e6] dark:border-[#2d3e46] flex justify-between items-center bg-gray-50/50 dark:bg-[#1e2f36]/30">
            <h2 className="font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">event_available</span>
              Upcoming Events
            </h2>
            <a className="text-xs font-semibold text-primary hover:underline" href="/events">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/30 dark:bg-[#1e2f36]/20">
                <tr>
                  <th className="px-6 py-3 text-[11px] uppercase tracking-wider font-bold text-gray-500">Date</th>
                  <th className="px-6 py-3 text-[11px] uppercase tracking-wider font-bold text-gray-500">Event Name</th>
                  <th className="px-6 py-3 text-[11px] uppercase tracking-wider font-bold text-gray-500">Status</th>
                  <th className="px-6 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#2d3e46]">
                {data.upcomingEvents.map(evt => (
                  <tr key={evt.id} className="hover:bg-gray-50 dark:hover:bg-[#24343b] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary p-2 rounded-lg text-center min-w-[48px]">
                          <p className="text-xs font-bold leading-none">{new Date(evt.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</p>
                          <p className="text-lg font-bold">{new Date(evt.date).getDate()}</p>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{new Date(evt.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold">{evt.name}</p>
                      <p className="text-xs text-gray-500">{evt.venue || 'No Venue'}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">{evt.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] rounded-2xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-[#dbe3e6] dark:border-[#2d3e46] flex justify-between items-center bg-gray-50/50 dark:bg-[#1e2f36]/30">
            <h2 className="font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
              Open Invoices
            </h2>
            <a className="text-xs font-semibold text-primary hover:underline" href="/invoices">View All</a>
          </div>
          <div className="p-4 space-y-4">
            {data.recentInvoices.map(inv => (
              <div key={inv.id} className="p-4 rounded-xl border border-[#f0f3f4] dark:border-[#2d3e46] hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">#{inv.invoiceNumber}</p>
                    <p className="text-sm font-semibold mt-1">{inv.customer.name}</p>
                  </div>
                  <span className="text-lg font-bold text-primary">${inv.amount.toFixed(2)}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {new Date(inv.issueDate).toLocaleDateString()}
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase ${
                      inv.status === 'Overdue' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' :
                      inv.status === 'Paid' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                      'bg-gray-100 dark:bg-[#2d3e46] text-gray-500'
                  }`}>
                    {inv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
