import Layout from "@/components/layout/Layout";

const Patients = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="text-foreground">Patients</span>
        </div>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Patients Management</h1>
          <p className="text-muted-foreground">Manage your patient records and information here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Patients;