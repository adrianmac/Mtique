export default function InvoicesPage() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2b32] border border-[#dbe3e6] dark:border-[#2d3a40]">
          <div className="flex justify-between items-start">
            <p className="text-[#617f89] dark:text-[#a0b1b7] text-sm font-medium">Total Receivables</p>
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
          <p className="text-[#111618] dark:text-white tracking-tight text-2xl font-bold">$12,450.00</p>
          <p className="text-[#078836] text-sm font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">trending_up</span> +12.5% vs last month
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2b32] border border-[#dbe3e6] dark:border-[#2d3a40]">
          <div className="flex justify-between items-start">
            <p className="text-[#617f89] dark:text-[#a0b1b7] text-sm font-medium">Overdue Amount</p>
            <span className="material-symbols-outlined text-[#e73508]">warning</span>
          </div>
          <p className="text-[#111618] dark:text-white tracking-tight text-2xl font-bold">$3,200.00</p>
          <p className="text-[#e73508] text-sm font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">priority_high</span> High Priority
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2b32] border border-[#dbe3e6] dark:border-[#2d3a40]">
          <div className="flex justify-between items-start">
            <p className="text-[#617f89] dark:text-[#a0b1b7] text-sm font-medium">Recently Paid</p>
            <span className="material-symbols-outlined text-[#078836]">check_circle</span>
          </div>
          <p className="text-[#111618] dark:text-white tracking-tight text-2xl font-bold">$8,150.00</p>
          <p className="text-primary text-sm font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">update</span> Last updated 2h ago
          </p>
        </div>
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
            <tr className="hover:bg-[#f6f7f8] dark:hover:bg-white/5 transition-colors group">
              <td className="px-6 py-4 text-sm font-bold text-primary">#INV-2023-001</td>
              <td className="px-6 py-4">
                <p className="text-sm font-bold text-[#111618] dark:text-white">Sarah Jenkins</p>
                <p className="text-xs text-[#617f89]">sarah.j@example.com</p>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">Wedding Planning</span>
              </td>
              <td className="px-6 py-4 text-sm text-[#617f89] dark:text-[#a0b1b7]">Oct 24, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-[#111618] dark:text-white">$4,250.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  <span className="size-1.5 rounded-full bg-green-600"></span>
                  Paid
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-1 hover:bg-[#dbe3e6] dark:hover:bg-[#2d3a40] rounded text-[#617f89]">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#f6f7f8] dark:hover:bg-white/5 transition-colors group">
              <td className="px-6 py-4 text-sm font-bold text-primary">#INV-2023-042</td>
              <td className="px-6 py-4">
                <p className="text-sm font-bold text-[#111618] dark:text-white">Michael Ross</p>
                <p className="text-xs text-[#617f89]">m.ross@logistics.com</p>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold uppercase rounded">Rentals</span>
              </td>
              <td className="px-6 py-4 text-sm text-[#617f89] dark:text-[#a0b1b7]">Nov 02, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-[#111618] dark:text-white">$1,120.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  <span className="size-1.5 rounded-full bg-red-600"></span>
                  Overdue
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-1 hover:bg-[#dbe3e6] dark:hover:bg-[#2d3a40] rounded text-[#617f89]">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
