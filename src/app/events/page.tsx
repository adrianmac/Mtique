export default function EventsPage() {
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
            <tr>
              <td className="px-6 py-4 font-bold">Thompson Wedding</td>
              <td className="px-6 py-4">Claire & David T.</td>
              <td className="px-6 py-4"><span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-bold uppercase">Wedding</span></td>
              <td className="px-6 py-4">Oct 24, 2023</td>
              <td className="px-6 py-4"><span className="text-blue-500 font-bold text-sm">Planning</span></td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-bold">Global Tech Gala</td>
              <td className="px-6 py-4">Horizon Systems</td>
              <td className="px-6 py-4"><span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-bold uppercase">Gala</span></td>
              <td className="px-6 py-4">Nov 02, 2023</td>
              <td className="px-6 py-4"><span className="text-yellow-500 font-bold text-sm">Finalized</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
