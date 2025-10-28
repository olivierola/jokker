import { ChatbotCard, type Chatbot } from "@/components/ChatbotCard";
import { CreateChatbotCard } from "@/components/CreateChatbotCard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const mockChatbots: Chatbot[] = [
  {
    id: "1",
    name: "Support E-commerce",
    status: "online",
    lastActivity: "il y a 5 minutes",
    queries: 1254,
  },
  {
    id: "2",
    name: "Documentation Interne",
    status: "training",
    lastActivity: "il y a 2 heures",
    queries: 342,
  },
  {
    id: "3",
    name: "FAQ Produit",
    status: "error",
    lastActivity: "il y a 1 jour",
    queries: 890,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-left">
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Gérez vos chatbots et créez-en de nouveaux.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockChatbots.map((chatbot) => (
              <ChatbotCard key={chatbot.id} chatbot={chatbot} />
            ))}
            <CreateChatbotCard />
          </div>
        </main>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;