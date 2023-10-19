import Sidebar from "@components/Sidebar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="w-full h-screen">{children}</div>
    </>
  );
}
