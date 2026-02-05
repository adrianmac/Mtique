import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import InventoryTable from "@/components/InventoryTable";
import LowStockAlert from "@/components/LowStockAlert";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-8 bg-background-light dark:bg-background-dark">
          <InventoryTable />
          <LowStockAlert />
        </div>
      </main>
    </div>
  );
}
