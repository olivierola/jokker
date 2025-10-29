import { mainNavItems } from "@/config/main-nav-items";
import { poolNavItems } from "@/config/pool-nav-items";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { poolId } = useParams();
  const location = useLocation();

  const isPoolView = location.pathname.startsWith(`/pool/`);
  const navItems = isPoolView ? poolNavItems : mainNavItems;

  const getPath = (item: { href: string }) => {
    if (isPoolView) {
      return `/pool/${poolId}${item.href}`;
    }
    return item.href;
  };

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
            <Bot className="h-6 w-6" />
            <span className="">AI Forge</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={getPath(item)}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                    isActive ? "bg-muted text-primary" : "text-muted-foreground"
                  )
                }
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};