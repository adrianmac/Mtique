"use client";

import React from 'react';

export default function Dashboard() {
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
                <tr className="hover:bg-gray-50 dark:hover:bg-[#24343b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg text-center min-w-[48px]">
                        <p className="text-xs font-bold leading-none">OCT</p>
                        <p className="text-lg font-bold">24</p>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Sat, 10:00 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold">Thompson Wedding</p>
                    <p className="text-xs text-gray-500">Rosewood Estate</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Planning</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#24343b] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 dark:bg-[#24343b] text-gray-600 dark:text-gray-400 p-2 rounded-lg text-center min-w-[48px]">
                        <p className="text-xs font-bold leading-none">NOV</p>
                        <p className="text-lg font-bold">02</p>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Thu, 06:30 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold">Global Tech Gala</p>
                    <p className="text-xs text-gray-500">Skyline Ballroom</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">Finalized</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
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
            <div className="p-4 rounded-xl border border-[#f0f3f4] dark:border-[#2d3e46] hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">INV-2023-042</p>
                  <p className="text-sm font-semibold mt-1">Michael Ross</p>
                </div>
                <span className="text-lg font-bold text-primary">$1,120.00</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  Due Nov 02
                </span>
                <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 uppercase">Overdue</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[#f0f3f4] dark:border-[#2d3e46] hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">INV-2023-051</p>
                  <p className="text-sm font-semibold mt-1">David Miller</p>
                </div>
                <span className="text-lg font-bold text-primary">$6,000.00</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  Due Nov 10
                </span>
                <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-gray-100 dark:bg-[#2d3e46] text-gray-500 uppercase">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
