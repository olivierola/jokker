import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderKanban, ArrowRight } from "lucide-react";
import type { Pool } from "@/api/pools";
import { Link } from "react-router-dom";

interface PoolCardProps {
  pool: Pool;
}

export const PoolCard = ({ pool }: PoolCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <FolderKanban className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>{pool.name}</CardTitle>
            <CardDescription>{pool.description || "No description"}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          Created on {new Date(pool.created_at).toLocaleDateString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to={`/pool/${pool.id}`}>
            Open Pool
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};