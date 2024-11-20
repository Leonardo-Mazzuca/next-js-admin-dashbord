import AnalyticsChart from "@/components/dashboard/analytics-chart";
import DashboardCard from "@/components/dashboard/dashboard-card";
import PostTable from "@/components/posts/post-table";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";


export default function Home() {
  return (
    <>

    <div className="flex flex-col justify-between gap-5 mb-5 md:flex-row">
      <DashboardCard 
        title="Posts" 
        count={200}
        icon={<Newspaper size={72} className='text-slate-500' />}
      />
      <DashboardCard 
        title="Categories" 
        count={12}
        icon={<Folder size={72} className='text-slate-500' />}
      />
      <DashboardCard 
        title="Users" 
        count={750}
        icon={<User size={72} className='text-slate-500' />}
      />
      <DashboardCard 
        title="Comments" 
        count={1200}
        icon={<MessageCircle size={72} className='text-slate-500' />}
      />
    </div>

    <AnalyticsChart />

    <PostTable title="Latest Posts" limit={5}/>
    
    
    </>
  );
}
