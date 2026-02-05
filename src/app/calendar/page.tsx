export default function CalendarPage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-[#1a2b32] border-b border-[#e5e7eb] dark:border-[#2d3a41] px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-[#111618] dark:text-white tracking-tight">Calendar</h2>
            <p className="text-sm text-[#617f89] dark:text-[#a0b0b8]">October 2023</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#f0f3f4] dark:bg-[#26373f] rounded-lg p-1">
              <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-[#1a2b32] shadow-sm rounded-md text-[#111618] dark:text-white">Month</button>
              <button className="px-4 py-1.5 text-xs font-medium text-[#617f89] dark:text-[#a0b0b8]">Week</button>
              <button className="px-4 py-1.5 text-xs font-medium text-[#617f89] dark:text-[#a0b0b8]">Day</button>
            </div>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Add Event</span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-8">
        {/* Simplified Calendar Grid for MVP */}
        <div className="bg-white dark:bg-[#1a2b32] rounded-xl border border-[#e5e7eb] dark:border-[#2d3a41] h-full p-4 flex items-center justify-center text-[#617f89]">
          Calendar view implementation...
        </div>
      </div>
    </div>
  );
}
