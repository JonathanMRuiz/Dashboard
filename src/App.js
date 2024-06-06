import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="d-flex items-center justify-center flex-col">
      <main className="h-screen p-4">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
