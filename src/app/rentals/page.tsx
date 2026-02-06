import InventoryTable from "@/components/InventoryTable";
import LowStockAlert from "@/components/LowStockAlert";

export default function RentalsPage() {
  return (
    <div className="flex-1 overflow-auto p-8 bg-background-light dark:bg-background-dark">
      <h1 className="text-2xl font-bold mb-4">Rentals Management</h1>
      {/* Reusing Inventory components as per design similarities */}
      <InventoryTable />
      <LowStockAlert />
    </div>
  );
}
