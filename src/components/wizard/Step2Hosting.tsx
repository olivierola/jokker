import { useChatbotWizardStore } from "@/store/chatbot-wizard";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud } from "lucide-react";

export const Step2Hosting = () => {
  const { hosting, setHosting } = useChatbotWizardStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Hosting Type</h2>
        <p className="text-sm text-muted-foreground">
          Choose where your AI will be hosted.
        </p>
      </div>
      <RadioGroup
        value={hosting}
        onValueChange={(value) => setHosting(value as "self-hosted" | "managed")}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Label htmlFor="managed">
          <Card className={`cursor-pointer ${hosting === 'managed' ? 'border-primary' : ''}`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Managed</CardTitle>
              <Cloud className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                We handle everything for you. Easiest and fastest way to get started.
              </p>
            </CardContent>
          </Card>
          <RadioGroupItem value="managed" id="managed" className="sr-only" />
        </Label>
        <Label htmlFor="self-hosted">
          <Card className={`cursor-pointer ${hosting === 'self-hosted' ? 'border-primary' : ''}`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Self-Hosted</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Deploy on your own infrastructure for maximum control.
              </p>
            </CardContent>
          </Card>
          <RadioGroupItem value="self-hosted" id="self-hosted" className="sr-only" />
        </Label>
      </RadioGroup>
    </div>
  );
};