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
  {
    id: "cb_4",
    name: "Customer Service",
    status: "online",
    lastActivity: "15 minutes ago",
    usage: 3450,
  },
  {
    id: "cb_5",
    name: "FAQ Assistant",
    status: "online",
    lastActivity: "6 hours ago",
    usage: 890,
  },
  {
    id: "cb_6",
    name: "Data Indexer",
    status: "training",
    lastActivity: "30 seconds ago",
    usage: 5,
  },
];

export const fetchChatbots = (): Promise<Chatbot[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockChatbots);
    }, 1000); // Simule une latence réseau de 1 seconde
  });
};