import { supabase } from "@/integrations/supabase/client";

export type Pool = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
};

export const fetchPools = async (): Promise<Pool[]> => {
  const { data, error } = await supabase
    .from('pools')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching pools:", error);
    throw error;
  }

  return data;
};