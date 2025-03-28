import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StepProgress from "./components/StepProgress";
import FloorPlans from "./pages/FloorPlans";
import Apartment from "./pages/Apartment";
import LeaseTerms from "./pages/LeaseTerms";
import Quote from "./pages/Quote";

export default function App() {
  return (
    <Router>
      <div className="p-6">
        <StepProgress />
        <Routes>
          {/* เพิ่มเส้นทาง "/" และ Redirect ไป "/floor-plans" */}
          <Route path="/" element={<Navigate to="/floor-plans" />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/lease-terms" element={<LeaseTerms />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}
