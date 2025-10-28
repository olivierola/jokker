import { ChatbotCard, type Chatbot } from "@/components/ChatbotCard";
import { AddChatbotCard } from "@/components/AddChatbotCard";

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
    <div className="min-h-screen bg-gray-50 dark:bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Chatbots Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your RAG agents and create new ones.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockChatbots.map((chatbot) => (
              <ChatbotCard key={chatbot.id} chatbot={chatbot} />
            ))}
            <AddChatbotCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;