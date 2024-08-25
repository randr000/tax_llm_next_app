import Navbar from "./server_components/Navbar";
import BodyContainer from "./server_components/BodyContainer";
import Chatbot from "./client_components/Chatbot";

export default function Home() {
  return (
    <main className="bg-slate-300 py-0">
      <Navbar/>
      <BodyContainer>
        <Chatbot/>
      </BodyContainer>
      
    </main>
  );
}
