"use client";

import React, { useState, useEffect } from 'react';

type Invoice = {
  id: number;
  invoiceNumber: string;
  customer: { name: string; email: string };
  serviceType: string;
  issueDate: string;
  amount: number;
  status: string;
};

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const res = await fetch('/api/invoices');
        if (res.ok) {
          const data = await res.json();
          setInvoices(data);
        }
      } catch (error) {
        console.error("Failed to fetch invoices", error);
      } finally {
        setLoading(false);
      }
    }
    fetchInvoices();
  }, []);

  const getStatusStyle = (status: string) => {
    switch(status) {
        case 'Paid': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
        case 'Overdue': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
        case 'Partial': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
        default: return 'bg-gray-100 text-gray-700 dark:bg-[#2d3a40] dark:text-gray-400';
    }
  };

  if (loading) return <div className="p-8">Loading invoices...</div>;

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#111618] dark:text-white text-3xl font-black tracking-tight">Invoices</h2>
          <p className="text-[#617f89] dark:text-[#a0b1b7] text-base">Manage your billing and financial transactions for all services.</p>
        </div>
        <button className="flex items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
          <span>+ Create New Invoice</span>
        </button>
      </div>

      <div className="bg-white dark:bg-[#1a2b32] border border-[#dbe3e6] dark:border-[#2d3a40] rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#dbe3e6] dark:border-[#2d3a40] bg-[#f8f9fa] dark:bg-[#1a2b32]">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7]">Invoice #</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7]">Customer</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7]">Service Type</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7]">Issue Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7]">Amount</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7]">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#617f89] dark:text-[#a0b1b7] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dbe3e6] dark:divide-[#2d3a40]">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-[#f6f7f8] dark:hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 text-sm font-bold text-primary">#{inv.invoiceNumber}</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-[#111618] dark:text-white">{inv.customer.name}</p>
                  <p className="text-xs text-[#617f89]">{inv.customer.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">{inv.serviceType}</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#617f89] dark:text-[#a0b1b7]">{new Date(inv.issueDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-sm font-bold text-[#111618] dark:text-white">${inv.amount.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusStyle(inv.status)}`}>
                    <span className={`size-1.5 rounded-full ${inv.status === 'Paid' ? 'bg-green-600' : inv.status === 'Overdue' ? 'bg-red-600' : 'bg-current'}`}></span>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-[#dbe3e6] dark:hover:bg-[#2d3a40] rounded text-[#617f89]">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
