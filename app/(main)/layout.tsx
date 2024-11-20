
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      
<Navbar />
          <div className="flex">
            <div className="min-h-screen w-[300px] hidden md:block">
              <Sidebar />
            </div>
            <div className="p-5 w-full md:max-w-[1140px]">
              {children}
            </div>
          </div>
       
    </>


    
    
  );
}
