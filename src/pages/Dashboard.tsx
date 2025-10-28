import { ChatbotCard } from "@/components/ChatbotCard";
import { AddChatbotCard } from "@/components/AddChatbotCard";
import type { Chatbot } from "@/types";

const mockChatbots: Chatbot[] = [
  {
    id: "cb_1",
    name: "E-commerce Support",
    status: "online",
    lastActivity: "2 hours ago",
    usage: 1420,
  },
  {
    id: "cb_2",
    name: "Internal KB",
    status: "offline",
    lastActivity: "1 day ago",
    usage: 567,
  },
  {
    id: "cb_3",
    name: "Onboarding Bot",
    status: "training",
    lastActivity: "5 minutes ago",
    usage: 12,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockChatbots.map((chatbot) => (
          <ChatbotCard key={chatbot.id} chatbot={chatbot} />
        ))}
        <AddChatbotCard />
      </div>
    </>
  );
};

export default Dashboard;