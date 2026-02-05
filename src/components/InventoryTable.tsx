import React from 'react';

export default function InventoryTable() {
  return (
    <>
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
              {/* Row 1 */}
              <tr className="hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                    <div className="size-10 rounded-lg bg-cover bg-center border border-[#dbe3e6] dark:border-[#2d3e46]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnBTx9MgjgF3D_RnxK__6uKvKSTUNAPywCj_mSvwyWZaK7amnsimtzIxDYAH3HGiRSQhD4ZBkFGQVLRzSK9s1XeOIP1gTUm6ekH7T0rna2O79uuQlIWCE435pWGmKkgaM-vFZPARTkhnvmrph3m3egJ8r5_ujaAYleqEDm74asjfuLCWkJX7Of28KadoRNaIxXHDLlMGChG3KQTCUtxozN-UAoKm_tdrLla4A2pYq9vsbyVvOFD8dg3fXDGQuvN6VhtFECBSwIdaYG")' }}></div>
                    <span className="text-sm font-medium text-[#111618] dark:text-white">Lace Wedding Dress</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Seamstress</span>
                </td>
                <td className="p-4 text-sm text-[#617f89]">WD-001</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 max-w-[100px] h-1.5 bg-[#dbe3e6] dark:bg-[#2d3e46] rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '40%' }}></div>
                    </div>
                    <p className="text-sm font-bold text-[#111618] dark:text-white">4 / 10</p>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium">$150.00</td>
                <td className="p-4 text-right">
                  <button className="text-[#617f89] hover:text-primary transition-colors p-1">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="text-[#617f89] hover:text-red-500 transition-colors p-1">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                    <div className="size-10 rounded-lg bg-cover bg-center border border-[#dbe3e6] dark:border-[#2d3e46]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArbaMz1BrPi5I8Vi1iidf3XSGh2epG4svMdqI3-3ZcLR7UiZdfc9W21j_aJpiUHnFFi4J1cuQ0MJcJyqsTrbQkE5oY3chuSiK7sTuS3mC3rQq185ff7NNDLlC61hh1yu7_C1aJlLbwP6zpmZgYWJPyyK1zYMLuKFFCJl8ql7N4y_gUQP2nESNvll_eM7bbY919FK56DDd2I_lU-6zcJ-k0n0X7pbdP2N9wXROldAiRtoFXKjHskbmpsjk1cqu7inGqrDpC4-TFvfSi")' }}></div>
                    <span className="text-sm font-medium text-[#111618] dark:text-white">Folding Gold Chair</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-[#617f89]/10 text-[#617f89] text-xs font-bold rounded-full uppercase">Decor</span>
                </td>
                <td className="p-4 text-sm text-[#617f89]">DC-442</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 max-w-[100px] h-1.5 bg-[#dbe3e6] dark:bg-[#2d3e46] rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-sm font-bold text-[#111618] dark:text-white">95 / 100</p>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium">$5.00</td>
                <td className="p-4 text-right">
                  <button className="text-[#617f89] hover:text-primary transition-colors p-1">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="text-[#617f89] hover:text-red-500 transition-colors p-1">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                    <div className="size-10 rounded-lg bg-cover bg-center border border-[#dbe3e6] dark:border-[#2d3e46]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhgoMggCl2ZZo4W__--3HkVANJjSk8PGL3jHeTBNbjAo8qMnZVsyIl2g-iwI4_nw_uIPqe92HQfSttP_km-7FBfgsaubuXtuWWd-LhOyAY5084t5gOI472yuFKYrmcwDU-9tr5igbIAoYVRHrBdKbNppbTheDV9VzYoF5gwDLsGMbSLhT4K8vnBFgL7Rh0GxHAgeL-HwcpyU80Zne3TagkWDwLnH_rcf8RdMBya2YBzB9y1ZyYLCW1eX5nSOfdLqlKIY-LKZBqqKMl")' }}></div>
                    <span className="text-sm font-medium text-[#111618] dark:text-white">Silk Ribbon Spool</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-[#617f89]/10 text-[#617f89] text-xs font-bold rounded-full uppercase">Supplies</span>
                </td>
                <td className="p-4 text-sm text-[#617f89]">SP-12</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 max-w-[100px] h-1.5 bg-[#dbe3e6] dark:bg-[#2d3e46] rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '10%' }}></div>
                    </div>
                    <p className="text-sm font-bold text-[#111618] dark:text-white">2 / 20</p>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium">$12.00</td>
                <td className="p-4 text-right">
                  <button className="text-[#617f89] hover:text-primary transition-colors p-1">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="text-[#617f89] hover:text-red-500 transition-colors p-1">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                    <div className="size-10 rounded-lg bg-cover bg-center border border-[#dbe3e6] dark:border-[#2d3e46]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBnJ3cUhIjJmvCaIa07tQFP-P39ug4rZPv6JmCmrtCf8GG5L1Ipa9GG_ArtC8ehRtWl0ODQPSU7ZoUo9FpFr0peLHGHJgmVY45LnJtdw-HYU7xQbRw9mDap2hrJVTp9xoBsaMlCeP4B9RSfeJaYc0OAwZcnStj0vUCY9aECwDievcQAvegS5ijt1Z59UWe2tZFLM640VaBhIRaQ3QsISRLD7aISC9jweeeXMrSOIDR-yuIAzW4TcOdG9fCyLe8DSRVhDHUEsUngKm5")' }}></div>
                    <span className="text-sm font-medium text-[#111618] dark:text-white">Floral Centerpiece</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-[#617f89]/10 text-[#617f89] text-xs font-bold rounded-full uppercase">Decor</span>
                </td>
                <td className="p-4 text-sm text-[#617f89]">DC-109</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 max-w-[100px] h-1.5 bg-[#dbe3e6] dark:bg-[#2d3e46] rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '17%' }}></div>
                    </div>
                    <p className="text-sm font-bold text-[#111618] dark:text-white">15 / 88</p>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium">$45.00</td>
                <td className="p-4 text-right">
                  <button className="text-[#617f89] hover:text-primary transition-colors p-1">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="text-[#617f89] hover:text-red-500 transition-colors p-1">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
              {/* Row 5 */}
              <tr className="hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors border-b-0">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-[#dbe3e6] text-primary focus:ring-primary" type="checkbox" />
                    <div className="size-10 rounded-lg bg-cover bg-center border border-[#dbe3e6] dark:border-[#2d3e46]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFur68fB2NId6S5h22m_Lf0h_rlJrxRkh7kX78DqvVUYl4vfkq8oVAuFnMcEe6AUvAvnQ459NS07UVvtEdhFSnG5p5YkMoS0jJTk7CkqAPaRKWF94egTTxzi7MfnLDwtO-a4Z-9yYozy2gvQaMj8N5V7R_tYiy6U2dsDd2qomCc6HxW1xYYlFwDUrFow6swS95r_-dThSGB0kB2Ca0JHjANLh1JfbwTkwf0kKocoAkZt0CPXZ7iqLLl9ySbMSykD5fx0k9O8MD3ceo")' }}></div>
                    <span className="text-sm font-medium text-[#111618] dark:text-white">Vintage Veil</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Rentals</span>
                </td>
                <td className="p-4 text-sm text-[#617f89]">WD-088</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 max-w-[100px] h-1.5 bg-[#dbe3e6] dark:bg-[#2d3e46] rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '5%' }}></div>
                    </div>
                    <p className="text-sm font-bold text-[#111618] dark:text-white">1 / 20</p>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium">$60.00</td>
                <td className="p-4 text-right">
                  <button className="text-[#617f89] hover:text-primary transition-colors p-1">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="text-[#617f89] hover:text-red-500 transition-colors p-1">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#fcfdfe] dark:bg-[#1e2f36] border-t border-[#dbe3e6] dark:border-[#2d3e46]">
          <p className="text-sm text-[#617f89]">Showing 1 to 5 of 124 items</p>
          <div className="flex items-center gap-1">
            <button className="size-9 flex items-center justify-center rounded-lg text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-9 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
            <button className="size-9 flex items-center justify-center rounded-lg text-[#111618] dark:text-white hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] text-sm font-medium transition-colors">2</button>
            <button className="size-9 flex items-center justify-center rounded-lg text-[#111618] dark:text-white hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] text-sm font-medium transition-colors">3</button>
            <span className="px-2 text-[#617f89]">...</span>
            <button className="size-9 flex items-center justify-center rounded-lg text-[#111618] dark:text-white hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] text-sm font-medium transition-colors">12</button>
            <button className="size-9 flex items-center justify-center rounded-lg text-[#617f89] hover:bg-[#f0f3f4] dark:hover:bg-[#24343b] transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
