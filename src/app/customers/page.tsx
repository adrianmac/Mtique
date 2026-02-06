"use client";

import React, { useState, useEffect } from 'react';

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  totalSpent: number;
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const res = await fetch('/api/customers');
        if (res.ok) {
          const data = await res.json();
          setCustomers(data);
        }
      } catch (error) {
        console.error("Failed to fetch customers", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomers();
  }, []);

  if (loading) return <div className="p-8">Loading customers...</div>;

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex justify-between items-end gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-[#111618] dark:text-white">Customer Directory</h2>
          <p className="text-[#617f89] dark:text-slate-400 text-sm">Manage your wedding, rental, and seamstress clients.</p>
        </div>
        <button className="bg-primary text-white h-10 px-4 rounded-lg text-sm font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">person_add</span>
          Add Customer
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-[#dbe3e6] dark:border-slate-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#f9fafb] dark:bg-slate-900/50 border-b border-[#dbe3e6] dark:border-slate-700">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase">Name</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase">Contact</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase">Total Spent</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dbe3e6] dark:divide-slate-700">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-[#f6f7f8] dark:hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-bold">{customer.name}</td>
                <td className="px-6 py-4 text-sm">{customer.email}<br/>{customer.phone}</td>
                <td className="px-6 py-4 font-bold">${customer.totalSpent.toFixed(2)}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#617f89] hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
