import Layout from "@/components/layout/Layout";

const Consultation = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="text-foreground">Consultation</span>
        </div>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Consultation</h1>
          <p className="text-muted-foreground">Conduct video consultations with your patients here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Consultation;