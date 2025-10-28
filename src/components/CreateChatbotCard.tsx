import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const CreateChatbotCard = () => {
  return (
    <Card className="border-2 border-dashed bg-muted hover:border-primary/80 hover:bg-muted/80 transition-colors min-h-[280px]">
      <Button variant="ghost" className="w-full h-full p-0">
        <CardContent className="flex flex-col items-center justify-center p-6 h-full">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">Créer un nouveau chatbot</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Déployez une nouvelle IA sur vos données.
              </p>
            </div>
        </CardContent>
      </Button>
    </Card>
  );
};