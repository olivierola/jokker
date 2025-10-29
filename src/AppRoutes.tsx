import { Routes, Route, Navigate } from "react-router-dom";
import { useSession } from "./contexts/SessionProvider";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";
import CreateChatbot from "./pages/CreateChatbot";
import ChatbotDetail from "./pages/ChatbotDetail";
import { Skeleton } from "./components/ui/skeleton";
import PoolsDashboard from "./pages/PoolsDashboard";

const AppRoutes = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<PoolsDashboard />} />
        <Route path="/pool/:poolId/chatbots" element={<Dashboard />} />
        <Route path="/create" element={<CreateChatbot />} />
        <Route path="/chatbot/:id" element={<ChatbotDetail />} />
        <Route path="/login" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;