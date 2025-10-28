import { useParams } from "react-router-dom";

const ChatbotDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Chatbot Details
        </h3>
        <p className="text-sm text-muted-foreground">
          Details for chatbot with ID: {id}
        </p>
      </div>
    </div>
  );
};

export default ChatbotDetail;