import Navbar from "./server_components/Navbar";
import BodyContainer from "./server_components/BodyContainer";
import Chatbot from "./server_components/Chatbot";
import QueryContainer from "./server_components/QueryContainer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <BodyContainer>
        <Chatbot/>
        <QueryContainer/>
      </BodyContainer>
      
    </main>
  );
}
