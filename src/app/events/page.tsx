"use client";

import React, { useState, useEffect } from 'react';

type Event = {
  id: number;
  name: string;
  customer: { name: string };
  type: string;
  date: string;
  status: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events');
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        }
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const getStatusColor = (status: string) => {
      if (status === 'Planning') return 'text-blue-500';
      if (status === 'Finalized') return 'text-yellow-500';
      if (status === 'Completed') return 'text-green-500';
      return 'text-gray-500';
  }

  if (loading) return <div className="p-8">Loading events...</div>;

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#111618] dark:text-white text-3xl font-black tracking-tight">Event Management</h2>
        <button className="bg-primary text-white px-5 h-10 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">add</span>
          Create New Event
        </button>
      </div>

      <div className="bg-white dark:bg-[#101d22] rounded-xl border border-[#e5e7eb] dark:border-[#2d3a41] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f9fafb] dark:bg-[#1a262c] border-b border-[#e5e7eb] dark:border-[#2d3a41]">
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase tracking-wider">Event Name</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase tracking-wider">Client</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-[#617f89] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3a41]">
            {events.map((evt) => (
              <tr key={evt.id}>
                <td className="px-6 py-4 font-bold">{evt.name}</td>
                <td className="px-6 py-4">{evt.customer.name}</td>
                <td className="px-6 py-4"><span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-bold uppercase">{evt.type}</span></td>
                <td className="px-6 py-4">{new Date(evt.date).toLocaleDateString()}</td>
                <td className="px-6 py-4"><span className={`${getStatusColor(evt.status)} font-bold text-sm`}>{evt.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
