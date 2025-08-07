import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, RotateCcw, ArrowUpDown, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const earningData = [
  {
    id: 1,
    productName: "Amrutam Nari Sondarya Malt",
    date: "19 Oct, 2024",
    time: "04:10 PM",
    coupon: "AM12344",
    commission: "15%",
    earning: "INR 120",
    status: "Paid",
    avatar: "/api/placeholder/32/32"
  },
  {
    id: 2,
    productName: "Amrutam Nari Sondarya Malt",
    date: "19 Oct, 2024",
    time: "05:10 PM",
    coupon: "AM12344",
    commission: "15%",
    earning: "INR 112",
    status: "Paid",
    avatar: "/api/placeholder/32/32"
  },
  {
    id: 3,
    productName: "Amrutam Nari Sondarya Malt",
    date: "19 Oct, 2024",
    time: "05:10 PM",
    coupon: "AM12344",
    commission: "25%",
    earning: "INR 82",
    status: "Pending",
    avatar: "/api/placeholder/32/32"
  },
];

const EarningHistory = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Affiliate</span>
          <span>&gt;</span>
          <span className="text-foreground">Earning History</span>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Earning History</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search here" 
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">S. No.</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Coupon/Link</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Earning</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {earningData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={item.avatar} alt={item.productName} />
                          <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{item.productName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
                    <TableCell className="text-muted-foreground">{item.time}</TableCell>
                    <TableCell>
                      <code className="bg-muted px-2 py-1 rounded text-sm">{item.coupon}</code>
                    </TableCell>
                    <TableCell>{item.commission}</TableCell>
                    <TableCell className="font-medium">{item.earning}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={item.status === "Paid" ? "default" : "secondary"}
                        className={item.status === "Paid" ? "bg-paid text-white" : "bg-pending text-white"}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">Rows per page: 5</p>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">1-3 of 80</p>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EarningHistory;