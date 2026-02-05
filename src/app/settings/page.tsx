export default function SettingsPage() {
  return (
    <div className="flex-1 flex justify-center py-8 overflow-y-auto">
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Settings</h1>
            <p className="text-[#617589] text-base mt-1">Configure your business workspace and system preferences.</p>
          </div>
          <button className="rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-all">
            Save Changes
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <aside className="w-full lg:w-72 flex flex-col gap-1">
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-md" href="#">
              <span className="material-symbols-outlined">domain</span>
              <span className="text-sm font-semibold">Company Profile</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f0f2f4] dark:hover:bg-[#2a3037] text-[#111418] dark:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">System Preferences</span>
            </a>
          </aside>

          <div className="flex-1 flex flex-col gap-10">
            <section className="bg-white dark:bg-[#1a242e] rounded-2xl border border-[#f0f2f4] dark:border-[#2a3037] p-8 shadow-sm">
              <h2 className="text-[#111418] dark:text-white text-2xl font-bold mb-8">Company Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Business Name</label>
                  <input className="rounded-lg border-[#d1d5db] dark:border-[#2a3037] dark:bg-[#101922] p-2" type="text" defaultValue="EventPlanner Pro" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111418] dark:text-white">Contact Email</label>
                  <input className="rounded-lg border-[#d1d5db] dark:border-[#2a3037] dark:bg-[#101922] p-2" type="email" defaultValue="admin@eventpro.com" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
