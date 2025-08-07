import { 
  BarChart3, 
  Calendar, 
  DollarSign, 
  Users, 
  MessageCircle, 
  Video, 
  Wallet,
  Share2,
  MoreHorizontal
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { 
    icon: BarChart3, 
    label: "Dashboard", 
    path: "/", 
    isMain: true 
  },
  { 
    icon: Users, 
    label: "Patients", 
    path: "/patients", 
    isMain: true 
  },
  { 
    icon: Calendar, 
    label: "Doctor Schedule", 
    path: "/schedule", 
    isMain: true 
  },
  { 
    icon: Calendar, 
    label: "Appointments", 
    path: "/appointments", 
    isMain: true 
  },
  { 
    icon: MessageCircle, 
    label: "Chat", 
    path: "/chat", 
    isMain: true 
  },
  { 
    icon: Video, 
    label: "Consultation", 
    path: "/consultation", 
    isMain: true 
  },
  { 
    icon: Wallet, 
    label: "Wallet", 
    path: "/wallet", 
    isMain: true 
  },
];

const affiliateItems = [
  { 
    icon: BarChart3, 
    label: "Dashboard", 
    path: "/affiliate" 
  },
  { 
    icon: Share2, 
    label: "Referral Tool", 
    path: "/affiliate/referral-tool" 
  },
  { 
    icon: DollarSign, 
    label: "Earning History", 
    path: "/affiliate/earning-history" 
  },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="w-64 bg-sidebar border-r border-border min-h-screen">
      <div className="p-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground mb-4">Main</h3>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-sidebar-hover text-sidebar-text-active" 
                    : "text-sidebar-text hover:bg-sidebar-hover hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          
          <div className="pt-6">
            <h3 className="text-sm font-medium text-foreground mb-4">Affiliate</h3>
            {affiliateItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-sidebar-hover text-sidebar-text-active" 
                      : "text-sidebar-text hover:bg-sidebar-hover hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;