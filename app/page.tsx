import Navbar from "./components/Navbar";
import BodyContainer from "./components/BodyContainer";
import Chatbot from "./components/Chatbot";

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
