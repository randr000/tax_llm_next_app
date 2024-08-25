import Navbar from "./server_components/Navbar";
import BodyContainer from "./server_components/BodyContainer";
import Chatbot from "./server_components/Chatbot";
import QueryContainer from "./server_components/QueryContainer";
import ChatbotProvider from "./client_components/ChatbotProvider";

export default function Home() {
  return (
    <main className="bg-slate-300 py-0">
      <Navbar/>
      <BodyContainer>
        <ChatbotProvider/>
      </BodyContainer>
      
    </main>
  );
}
