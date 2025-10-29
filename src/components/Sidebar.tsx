import { poolNavItems } from "@/config/pool-nav-items";
import { Link, NavLink, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const { poolId } = useParams();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 pt-6">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {poolNavItems.map((item) => (
              <NavLink
                key={item.label}
                to={`/pool/${poolId}${item.href}`}
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