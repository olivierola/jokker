export type Chatbot = {
  id: string;
  name: string;
  status: "online" | "offline" | "training";
  lastActivity: string;
  usage: number;
};