import Layout from "@/components/layout/Layout";

const Appointments = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="text-foreground">Appointments</span>
        </div>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Appointments</h1>
          <p className="text-muted-foreground">View and manage your upcoming appointments here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Appointments;