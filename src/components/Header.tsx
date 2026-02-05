"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Dashboard';
      case '/inventory': return 'Inventory Management';
      case '/invoices': return 'Invoices';
      case '/calendar': return 'Calendar';
      case '/events': return 'Events';
      case '/customers': return 'Customers';
      case '/settings': return 'Settings';
      default: return 'EventPlanner Pro';
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-[#1a2a30] border-b border-[#dbe3e6] dark:border-[#2d3e46]">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="text-[#111618] dark:text-white text-xl font-bold">{getPageTitle(pathname)}</h2>
        <div className="relative max-w-md w-full ml-4">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617f89] text-xl">search</span>
          <input
            className="w-full bg-[#f0f3f4] dark:bg-[#24343b] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary placeholder:text-[#617f89] dark:text-white focus:outline-none"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-xl">add</span>
          Add New
        </button>
        <div className="h-8 w-px bg-[#dbe3e6] dark:border-[#2d3e46]"></div>
        <button className="relative p-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2a30]"></span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-[#dbe3e6]"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCHMHFQv7CEdvOiUj6zCV6A8WC7dlInc56_7cyPOC5ckvDUjnFCYAL8tN-rgAMKqrRopZQI-dAZfWRRigAFTqFg58tgPKENUJF7WZ3Wu65yIBPN_XVNlLbwg2bacbGgms5JnQISvFlXEalaNyCYu12aiqZ-y1W-i4_JoNozNaxMXIQdqZuzXk8k1S1xEIk09Qcl02komU71TX_0NkeQHiiE4De2zeO2NwG-wBljF3s2WkTMLLi0OjobbNZZHX0NbXOiBwwMzdnB9CL")' }}
        ></div>
      </div>
    </header>
  );
}
