import HomeComponent from "./routes/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecretComponent } from "./routes/SecretPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/secret" element={<SecretComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
