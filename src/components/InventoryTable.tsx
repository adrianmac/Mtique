"use client";

import React, { useState, useEffect } from 'react';

type InventoryItem = {
  id: number;
  name: string;
  category: string;
  sku: string;
  stockAvailable: number;
  stockTotal: number;
  price: number;
  imageUrl: string | null;
};

export default function InventoryTable() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInventory() {
      try {
        const response = await fetch('/api/inventory');
        if (response.ok) {
          const data = await response.json();
          setInventory(data);
        } else {
          console.error('Failed to fetch inventory');
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchInventory();
  }, []);

  if (loading) {
    return <div className="p-8">Loading inventory...</div>;
  }

  return (
    <div className="flex-1 overflow-auto p-8 bg-background-light dark:bg-background-dark">
      {/* Filters Section */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex gap-2 flex-wrap">
          <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-primary text-white px-4 text-sm font-medium shadow-sm">
            All Items
          </button>
          <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] px-4 text-sm font-medium hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
            Dress Rentals
            <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] px-4 text-sm font-medium hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
            Decor
            <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] px-4 text-sm font-medium hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
            Supplies
            <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-[#617f89] font-medium">Bulk Actions:</p>
          <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] px-4 text-sm font-medium hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
            Select Option
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button className="p-2 bg-white dark:bg-[#1a2a30] border border-[#dbe3e6] dark:border-[#2d3e46] rounded-lg text-[#617f89] hover:text-[#111618] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#1a2a30] rounded-xl border border-[#dbe3e6] dark:border-[#2d3e46] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#dbe3e6] dark:border-[#2d3e46] bg-[#fcfdfe] dark:bg-[#1e2f36]">
                <th className="p-4 text-sm font-bold text-[#111618] dark:text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                    Item Name
                  </div>
                </th>
                <th className="p-4 text-sm font-bold text-[#111618] dark:text-white uppercase tracking-wider">Category</th>
                <th className="p-4 text-sm font-bold text-[#111618] dark:text-white uppercase tracking-wider">SKU</th>
                <th className="p-4 text-sm font-bold text-[#111618] dark:text-white uppercase tracking-wider">Stock (Avail/Total)</th>
                <th className="p-4 text-sm font-bold text-[#111618] dark:text-white uppercase tracking-wider">Rental Price</th>
                <th className="p-4 text-sm font-bold text-[#111618] dark:text-white uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dbe3e6] dark:divide-[#2d3e46]">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                      <div
                        className="size-10 rounded-lg bg-cover bg-center border border-[#dbe3e6] dark:border-[#2d3e46]"
                        style={{ backgroundImage: `url("${item.imageUrl || ''}")` }}
                      ></div>
                      <span className="text-sm font-medium text-[#111618] dark:text-white">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">{item.category}</span>
                  </td>
                  <td className="p-4 text-sm text-[#617f89]">{item.sku}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-[100px] h-1.5 bg-[#dbe3e6] dark:bg-[#2d3e46] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.stockAvailable / item.stockTotal < 0.2 ? 'bg-amber-500' : 'bg-primary'}`}
                          style={{ width: `${(item.stockAvailable / item.stockTotal) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm font-bold text-[#111618] dark:text-white">{item.stockAvailable} / {item.stockTotal}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium">${item.price.toFixed(2)}</td>
                  <td className="p-4 text-right">
                    <button className="text-[#617f89] hover:text-primary transition-colors p-1">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="text-[#617f89] hover:text-red-500 transition-colors p-1">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Footer - Static for now */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#fcfdfe] dark:bg-[#1e2f36] border-t border-[#dbe3e6] dark:border-[#2d3e46]">
          <p className="text-sm text-[#617f89]">Showing {inventory.length} items</p>
          <div className="flex items-center gap-1">
            <button className="size-9 flex items-center justify-center rounded-lg text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-9 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
            <button className="size-9 flex items-center justify-center rounded-lg text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
