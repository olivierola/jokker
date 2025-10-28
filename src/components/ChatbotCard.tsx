import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Clock, BarChart2, Settings } from "lucide-react";

export type Chatbot = {
  id: string;
  name: string;
  status: "online" | "offline" | "training";
  lastActivity: string;
  usage: number;
};

interface ChatbotCardProps {
  chatbot: Chatbot;
}

const statusVariant: { [key in Chatbot["status"]]: "default" | "secondary" | "destructive" } = {
  online: "default",
  offline: "destructive",
  training: "secondary",
};

const statusText: { [key in Chatbot["status"]]: string } = {
    online: "Online",
    offline: "Offline",
    training: "Training",
};

export const ChatbotCard = ({ chatbot }: ChatbotCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <Bot className="h-5 w-5" />
            {chatbot.name}
          </CardTitle>
          <Badge variant={statusVariant[chatbot.status]}>{statusText[chatbot.status]}</Badge>
        </div>
        <CardDescription>ID: {chatbot.id}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Last activity: {chatbot.lastActivity}</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            <span>Usage: {chatbot.usage} requests</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <Settings className="mr-2 h-4 w-4" />
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
};