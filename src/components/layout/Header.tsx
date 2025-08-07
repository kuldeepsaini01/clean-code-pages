import { Search, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">AMRUTAM</h1>
        <div className="hidden md:block h-6 w-px bg-border" />
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search here" 
            className="pl-10 bg-muted/50"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs">
              2
            </Badge>
          </div>
          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Dr. Liam Michael</p>
            <p className="text-xs text-muted-foreground">Doctor</p>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" alt="Dr. Liam Michael" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <Settings className="h-5 w-5 text-muted-foreground cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;