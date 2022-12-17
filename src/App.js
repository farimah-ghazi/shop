import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      
      

    </Routes>
  );
}

export default App;
