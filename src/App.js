import AddContact from "./pages/AddContact";
import AddMessage from "./pages/AddMessage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<AddContact />} />
        <Route path="/messages" element={<AddMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
