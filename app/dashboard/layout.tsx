import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-row gap-3">
        <Sidebar />
        <div className="flex-grow flex flex-col w-full p-3">{children}</div>
      </div>
    </section>
  );
}
