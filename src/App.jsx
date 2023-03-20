import "./app.css";
import Index from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App flex flex-col min-h-[calc(100vh-72px)] bg-base-100">
        <Index />
      </div>
      <Footer />
    </div>
  );
}

export default App;
