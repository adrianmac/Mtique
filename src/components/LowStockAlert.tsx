export default function LowStockAlert() {
  return (
    <div className="mt-8 flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="bg-amber-100 dark:bg-amber-800/40 p-2 rounded-lg text-amber-600 dark:text-amber-400">
          <span className="material-symbols-outlined">warning</span>
        </div>
        <div>
          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400">Inventory Alert: 4 items are running low</h4>
          <p className="text-xs text-amber-700/80 dark:text-amber-400/80">Stock levels for supplies and vintage rentals are below your threshold.</p>
        </div>
      </div>
      <button className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:underline">View Low Stock Items</button>
    </div>
  );
}
