import InventoryTable from "@/components/InventoryTable";
import LowStockAlert from "@/components/LowStockAlert";

export default function InventoryPage() {
  return (
    <div className="flex-1 overflow-auto p-8 bg-background-light dark:bg-background-dark">
      <InventoryTable />
      <LowStockAlert />
    </div>
  );
}
