import { create } from "zustand";

type HostingType = "self-hosted" | "managed";

interface ChatbotWizardState {
  step: number;
  name: string;
  description: string;
  hosting: HostingType;
  
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setHosting: (hosting: HostingType) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
}

export const useChatbotWizardStore = create<ChatbotWizardState>((set) => ({
  step: 1,
  name: "",
  description: "",
  hosting: "managed",

  setName: (name) => set({ name }),
  setDescription: (description) => set({ description }),
  setHosting: (hosting) => set({ hosting }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 5) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
  setStep: (step) => set({ step }),
}));