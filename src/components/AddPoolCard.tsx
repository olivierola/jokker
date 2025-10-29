import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AddPoolCard = () => {
  return (
    <Link to="/create-pool" className="w-full h-full">
        <Card className="h-full flex items-center justify-center border-2 border-dashed hover:border-primary hover:text-primary transition-colors">
            <CardContent className="p-6">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <PlusCircle className="h-10 w-10" />
                    <span className="font-medium text-sm">Create New Pool</span>
                </div>
            </CardContent>
        </Card>
    </Link>
  );
};