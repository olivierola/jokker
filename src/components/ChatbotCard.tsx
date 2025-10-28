import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, BarChart2 } from "lucide-react";

export type Chatbot = {
  id: string;
  name: string;
  status: "online" | "training" | "error";
  lastActivity: string;
  queries: number;
};

type ChatbotCardProps = {
  chatbot: Chatbot;
};

const statusMap = {
  online: { text: "En ligne", className: "bg-green-500 hover:bg-green-500 text-white" },
  training: { text: "Entraînement", className: "bg-blue-500 hover:bg-blue-500 text-white" },
  error: { text: "Erreur", className: "bg-red-500 hover:bg-red-500 text-white" },
};

export const ChatbotCard = ({ chatbot }: ChatbotCardProps) => {
  const statusInfo = statusMap[chatbot.status];

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{chatbot.name}</CardTitle>
          <Badge variant="default" className={statusInfo.className}>
            {statusInfo.text}
          </Badge>
        </div>
        <CardDescription>Dernière activité: {chatbot.lastActivity}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MessageSquare className="mr-1 h-4 w-4" />
            <span>{chatbot.queries} requêtes</span>
          </div>
          <div className="flex items-center">
            <BarChart2 className="mr-1 h-4 w-4" />
            <span>Voir l'usage</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Gérer</Button>
      </CardFooter>
    </Card>
  );
};