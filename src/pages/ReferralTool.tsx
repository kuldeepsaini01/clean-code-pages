import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import amrutamProduct from "@/assets/amrutam-product.jpg";

const ReferralTool = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Affiliate</span>
          <span>&gt;</span>
          <span className="text-foreground">Referral Tool</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Link/Coupon Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Product Link/Coupon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product">Enter the name of Product *</Label>
                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                  <SelectTrigger>
                    <SelectValue placeholder="Enter or Select the name of product you want to refer to your patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amrutam-nari-sondarya-malt">Amrutam Nari Sondarya Malt</SelectItem>
                    <SelectItem value="amrutam-immunity-booster">Amrutam Immunity Booster</SelectItem>
                    <SelectItem value="amrutam-hair-oil">Amrutam Hair Oil</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Enter or Select the name of product you want to refer to your patient.
                </p>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get
              </Button>
            </CardContent>
          </Card>

          {/* Cart Discount */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Cart Discount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Input 
                  value="DRLIAM2374" 
                  readOnly 
                  className="flex-1"
                />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleCopy("DRLIAM2374")}
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Product Details (when product is selected) */}
        {selectedProduct === "amrutam-nari-sondarya-malt" && (
          <>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Amrutam Nari Sondarya Malt</h3>
                    
                    <div className="space-y-2">
                      <Label>Product Link</Label>
                      <div className="flex items-center gap-2">
                        <Input 
                          value="https://www.amrutam.global//nari-sondarya-malt?" 
                          readOnly 
                          className="flex-1"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopy("https://www.amrutam.global//nari-sondarya-malt?")}
                        >
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Product Coupon Code</Label>
                      <div className="flex items-center gap-2">
                        <Input 
                          value="AMU7382478" 
                          readOnly 
                          className="flex-1"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopy("AMU7382478")}
                        >
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <img 
                      src={amrutamProduct}
                      alt="Amrutam Nari Sondarya Malt" 
                      className="w-48 h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">255</div>
                  <div className="text-sm text-muted-foreground">Total Referral</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">55</div>
                  <div className="text-sm text-muted-foreground">Total Orders</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">5,540</div>
                  <div className="text-sm text-muted-foreground">Total Revenue</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">5</div>
                  <div className="text-sm text-muted-foreground">Total Link/Coupon</div>
                </CardContent>
              </Card>
            </div>

            {/* Cart Discount */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Cart Discount</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input 
                    value="DRLIAM2374" 
                    readOnly 
                    className="flex-1"
                  />
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCopy("DRLIAM2374")}
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ReferralTool;