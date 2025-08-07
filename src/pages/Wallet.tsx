import Layout from "@/components/layout/Layout";

const Wallet = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="text-foreground">Wallet</span>
        </div>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Wallet</h1>
          <p className="text-muted-foreground">Manage your earnings and financial transactions here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;