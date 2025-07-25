import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "./components/ui/sonner";
import loadable from "@loadable/component";
import Navbar from "./components/Navbar";

const Home = loadable(() => import("./pages/Home"));
const JobList = loadable(() => import("./pages/JobList"));
const JobDetails = loadable(() => import("./pages/JobDetails"));

function App() {
  return (
    <>
      <Sonner />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
