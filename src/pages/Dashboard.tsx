import { useState } from "react";
import { BarChart, DollarSign, MousePointer, Link2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import StatsCard from "@/components/dashboard/StatsCard";
import ReferralTable from "@/components/dashboard/ReferralTable";
import AffiliateIntroModal from "@/components/modals/AffiliateIntroModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(true);

  const statsData = [
    {
      title: "Total Coupons clicks",
      value: "255",
      subtitle: "/month",
      icon: MousePointer,
      iconBg: "bg-success"
    },
    {
      title: "Total Orders",
      value: "55",
      subtitle: "/month",
      icon: BarChart,
      iconBg: "bg-success"
    },
    {
      title: "Total Revenue",
      value: "5,540",
      subtitle: "/month",
      icon: DollarSign,
      iconBg: "bg-success"
    },
    {
      title: "Total Link/Coupon",
      value: "5",
      subtitle: "/month",
      icon: Link2,
      iconBg: "bg-success"
    }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Affiliate</span>
          <span>&gt;</span>
          <span className="text-foreground">Dashboard</span>
        </div>

        {/* Time Period Tabs */}
        <Tabs defaultValue="month" className="w-full">
          <TabsList className="grid w-fit grid-cols-4 bg-muted">
            <TabsTrigger value="today">Today So Far</TabsTrigger>
            <TabsTrigger value="week">Week So Far</TabsTrigger>
            <TabsTrigger value="month">Month So Far</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="month" className="space-y-6 mt-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Referral Table */}
            <ReferralTable />
          </TabsContent>

          <TabsContent value="today" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            <ReferralTable />
          </TabsContent>

          <TabsContent value="week" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            <ReferralTable />
          </TabsContent>

          <TabsContent value="custom" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            <ReferralTable />
          </TabsContent>
        </Tabs>
      </div>

      <AffiliateIntroModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </Layout>
  );
};

export default Dashboard;