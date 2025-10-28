import { useChatbotWizardStore } from "@/store/chatbot-wizard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Step1Details = () => {
  const { name, description, setName, setDescription } = useChatbotWizardStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Chatbot Details</h2>
        <p className="text-sm text-muted-foreground">
          Give your new AI chatbot a name and a short description.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="e.g., Customer Support Bot"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="e.g., Answers customer questions about our products."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};