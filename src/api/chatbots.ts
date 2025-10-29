import { supabase } from "@/integrations/supabase/client";
import type { Chatbot } from "@/types";
import { formatDistanceToNow } from 'date-fns';

export const fetchChatbots = async (): Promise<Chatbot[]> => {
  const { data, error } = await supabase
    .from('chatbots')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching chatbots:", error);
    throw error;
  }

  // Le schéma de la base de données peut ne pas correspondre parfaitement au type du frontend.
  // Nous mappons les champs ici pour assurer la compatibilité.
  return data.map(chatbot => ({
    id: chatbot.id,
    name: chatbot.name,
    status: chatbot.status as Chatbot['status'],
    // Le champ 'lastActivity' dans le type du frontend attend une chaîne de caractères comme "il y a 2 heures".
    // Nous formatons l'horodatage de la base de données pour correspondre à cette attente.
    lastActivity: formatDistanceToNow(new Date(chatbot.last_activity), { addSuffix: true }),
    usage: chatbot.usage,
  }));
};