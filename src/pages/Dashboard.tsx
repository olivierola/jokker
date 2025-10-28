import React from "react";
import { ChatbotCard } from "@/components/ChatbotCard";
import { AddChatbotCard } from "@/components/AddChatbotCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { Chatbot } from "@/types";
import { fetchChatbots } from "@/api/chatbots";

const Dashboard = () => {
  const [chatbots, setChatbots] = React.useState<Chatbot[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<"all" | Chatbot["status"]>("all");

  React.useEffect(() => {
    const loadChatbots = async () => {
      setIsLoading(true);
      const data = await fetchChatbots();
      setChatbots(data);
      setIsLoading(false);
    };
    loadChatbots();
  }, []);

  const filteredChatbots = React.useMemo(() => {
    return chatbots
      .filter((chatbot) =>
        chatbot.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((chatbot) =>
        statusFilter === "all" ? true : chatbot.status === statusFilter
      );
  }, [chatbots, searchTerm, statusFilter]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage your chatbots and create new ones.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search chatbots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64"
          />
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value as typeof statusFilter)}
          >
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
              <SelectItem value="training">Training</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))
          : filteredChatbots.map((chatbot) => (
              <ChatbotCard key={chatbot.id} chatbot={chatbot} />
            ))}
        {!isLoading && <AddChatbotCard />}
      </div>
    </>
  );
};

export default Dashboard;