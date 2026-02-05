import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#1a2a30] border-r border-[#dbe3e6] dark:border-[#2d3e46] flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary rounded-lg size-10 flex items-center justify-center text-white">
            <span className="material-symbols-outlined">celebration</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#111618] dark:text-white text-base font-bold leading-tight">EventPlanner Pro</h1>
            <p className="text-[#617f89] text-xs font-normal">Management Suite</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="text-sm font-medium">Calendar</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">event</span>
          <span className="text-sm font-medium">Events</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-sm font-medium">Rentals</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">content_cut</span>
          <span className="text-sm font-medium">Seamstress</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 active-nav text-primary dark:text-primary bg-[#f0f3f4] dark:bg-[#24343b]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
          <span className="text-sm font-bold">Inventory</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-sm font-medium">Customers</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-sm font-medium">Invoices</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">monitoring</span>
          <span className="text-sm font-medium">Reports</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-[#dbe3e6] dark:border-[#2d3e46] space-y-1">
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] rounded-lg transition-colors">
          <span className="material-symbols-outlined">contact_support</span>
          <span className="text-sm font-medium">Support</span>
        </Link>
      </div>
    </aside>
  );
}
