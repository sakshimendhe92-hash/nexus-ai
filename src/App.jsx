import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import DashboardPreview from "./components/DashboardPreview/DashboardPreview";
import AISection from "./components/AISection/AISection";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import PlacementSection from "./components/PlacementSection/PlacementSection";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import AIChat from "./pages/AIChat/AIChat";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import Interview from "./pages/Interview/Interview";
import Placements from "./pages/Placements/Placements";
import Admin from "./pages/Admin/Admin";
import Settings from "./pages/Settings/Settings";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import Analytics from "./pages/Analytics/Analytics";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <DashboardPreview />
      <AISection />
      <ResumeSection />
      <PlacementSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <AIChat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume"
        element={
          <ProtectedRoute>
            <ResumeBuilder />
          </ProtectedRoute>
        }
      />

      <Route
  path="/interview"
  element={
    <ProtectedRoute>
      <Interview />
    </ProtectedRoute>
  }
/>

<Route
  path="/placements"
  element={
    <ProtectedRoute>
      <Placements />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

<Route path="/saved-jobs" element={<SavedJobs />} />
<Route path="/analytics" element={<Analytics />} />

    </Routes>

    
  );
}

export default App;
