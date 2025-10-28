import { Bot } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold">
          <Bot className="h-6 w-6" />
          <span className="text-lg">AI Forge</span>
        </div>
      </div>
    </header>
  );
};