import { Menu, Bot, CircleUser, Book } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { mainNavItems } from "@/config/main-nav-items";
import { poolNavItems } from "@/config/pool-nav-items";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { poolId } = useParams();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  // Logique pour le menu de la feuille mobile
  const isPoolView = location.pathname.startsWith(`/pool/`);
  const navItems = isPoolView ? poolNavItems : mainNavItems;
  const getPath = (item: { href: string }) => {
    if (isPoolView) {
      return `/pool/${poolId}${item.href}`;
    }
    return item.href;
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="/dashboard"
              className="mb-4 flex items-center gap-2 text-lg font-semibold"
            >
              <Bot className="h-6 w-6" />
              <span className="">AI Forge</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={getPath(item)}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="w-full flex-1" />

      <Button variant="outline" size="sm" asChild>
        <a href="/docs">
          <Book className="mr-2 h-4 w-4" />
          Docs
        </a>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};