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

export const createPool = async (pool: { name: string; description?: string }): Promise<Pool> => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");

    const { data, error } = await supabase
        .from('pools')
        .insert({ ...pool, user_id: user.id })
        .select()
        .single();

    if (error) {
        console.error("Error creating pool:", error);
        throw error;
    }

    return data;
};