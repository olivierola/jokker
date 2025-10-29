import { useChatbotWizardStore } from "@/store/chatbot-wizard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Step1Details } from "@/components/wizard/Step1Details";
import { Step2Hosting } from "@/components/wizard/Step2Hosting";
import { Step3DataSources } from "@/components/wizard/Step3DataSources";
import { Step4Vectorization } from "@/components/wizard/Step4Vectorization";
import { Step5Deploy } from "@/components/wizard/Step5Deploy";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useParams } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";
import { useState } from "react";

const steps = [
  { number: 1, component: <Step1Details /> },
  { number: 2, component: <Step2Hosting /> },
  { number: 3, component: <Step3DataSources /> },
  { number: 4, component: <Step4Vectorization /> },
  { number: 5, component: <Step5Deploy /> },
];

const CreateChatbot = () => {
  const { step, nextStep, prevStep, name, description, hosting } = useChatbotWizardStore();
  const navigate = useNavigate();
  const { poolId } = useParams();
  const [isDeploying, setIsDeploying] = useState(false);
  const progress = (step / steps.length) * 100;

  const CurrentStepComponent = steps[step - 1].component;

  const handleDeploy = async () => {
    setIsDeploying(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      showError("You must be logged in to create a chatbot.");
      setIsDeploying(false);
      return;
    }
    if (!poolId) {
      showError("Pool ID is missing.");
      setIsDeploying(false);
      return;
    }

    const { error } = await supabase
      .from('chatbots')
      .insert({
        name,
        description,
        hosting,
        user_id: user.id,
        pool_id: poolId,
      });

    if (error) {
      showError(error.message);
    } else {
      showSuccess("Chatbot created successfully!");
      navigate(`/pool/${poolId}/chatbots`);
    }
    setIsDeploying(false);
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create a new Chatbot</CardTitle>
          <div className="pt-2">
            <Progress value={progress} />
            <p className="text-sm text-muted-foreground mt-2">
              Step {step} of {steps.length}
            </p>
          </div>
        </CardHeader>
        <CardContent className="min-h-[250px]">
          {CurrentStepComponent}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          {step < steps.length ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button onClick={handleDeploy} disabled={isDeploying}>
              {isDeploying ? "Deploying..." : "Deploy"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateChatbot;