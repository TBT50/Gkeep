import "./App.css";

import { AppBar } from "@/components/AppBar";
import { MainBoard } from "@/components/MainBoard";
import { Sidebar } from "@/components/Sidebar";

function App() {
  return (
    <>
      <AppBar />
      <div>
        <Sidebar />
        <MainBoard />
      </div>
    </>
  );
}

export default App;
