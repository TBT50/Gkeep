import "./App.css";

import { AppBar } from "@/components/AppBar/AppBar";
import { MainBoard } from "@/components/MainBoard";
import { Sidebar } from "@/components/Sidebar";

function App() {
  return (
    <>
      <AppBar />
      <div className="grid grid-cols-[300px_1fr] h-full">
        <Sidebar />
        <MainBoard />
      </div>
    </>
  );
}

export default App;
