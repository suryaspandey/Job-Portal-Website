import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Home } from "./pages/Home";
import JobList from "./pages/JobList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Sonner />
       <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<JobList />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
