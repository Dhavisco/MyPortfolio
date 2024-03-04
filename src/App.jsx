import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => setLoading(false), 2000);

return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loading />;
}

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
