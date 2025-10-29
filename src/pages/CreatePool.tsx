import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPool } from "@/api/pools";
import { showSuccess, showError } from "@/utils/toast";

const CreatePool = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async () => {
    if (!name) {
      showError("Pool name is required.");
      return;
    }
    setIsCreating(true);
    try {
      await createPool({ name, description });
      showSuccess("Pool created successfully!");
      navigate("/dashboard");
    } catch (error) {
      showError((error as Error).message);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create a New Pool</CardTitle>
          <CardDescription>
            A pool is a container for your AI resources, including chatbots, data sources, and users.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Pool Name</Label>
            <Input
              id="name"
              placeholder="e.g., Customer Support"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isCreating}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="e.g., Pool for all customer-facing AI agents."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isCreating}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSubmit} disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Pool"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreatePool;