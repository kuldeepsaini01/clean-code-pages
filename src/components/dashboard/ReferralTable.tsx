import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, RotateCcw, ArrowUpDown, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const referralData = [
  {
    id: 1,
    name: "Andrea Lalema",
    date: "19 Oct, 2024",
    time: "04:10 PM",
    coupon: "AM12344",
    commission: "15%",
    clicks: 2,
    orders: 2,
    revenue: 340,
    gender: "Female",
    visits: 1,
    avatar: "/api/placeholder/32/32"
  },
  {
    id: 2,
    name: "Smith Bruklin",
    date: "19 Oct, 2024",
    time: "05:10 PM",
    coupon: "AM12344",
    commission: "15%",
    clicks: 4,
    orders: 4,
    revenue: 564,
    gender: "Male",
    visits: 4,
    avatar: "/api/placeholder/32/32"
  },
  {
    id: 3,
    name: "William Stephin",
    date: "19 Oct, 2024",
    time: "05:10 PM",
    coupon: "AM12344",
    commission: "25%",
    clicks: 1,
    orders: 1,
    revenue: 200,
    gender: "Male",
    visits: 1,
    avatar: "/api/placeholder/32/32"
  },
];

const ReferralTable = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Referral Overview</CardTitle>
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
              <TableHead>Clicks</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Report</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referralData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={item.avatar} alt={item.name} />
                      <AvatarFallback>{item.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.date}</TableCell>
                <TableCell className="text-muted-foreground">{item.time}</TableCell>
                <TableCell>
                  <code className="bg-muted px-2 py-1 rounded text-sm">{item.coupon}</code>
                </TableCell>
                <TableCell>{item.commission}</TableCell>
                <TableCell>{item.clicks}</TableCell>
                <TableCell>{item.orders}</TableCell>
                <TableCell>{item.revenue}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.gender}</Badge>
                </TableCell>
                <TableCell>{item.visits}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    📊
                  </Button>
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
  );
};

export default ReferralTable;