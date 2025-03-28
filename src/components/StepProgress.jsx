import { useLocation } from "react-router-dom";

const steps = [
  { id: 1, name: "เลือกขนาดห้อง", path: "/floor-plans" },
  { id: 2, name: "รายละเอียดของห้อง/ห้องว่าง", path: "/apartment" },
  { id: 3, name: "สัญญาการเช่าอยู่", path: "/lease-terms" },
  { id: 4, name: "แจ้งราคา", path: "/quote" },
];

export default function StepProgress() {
  const location = useLocation();

  return (
    <div className="flex items-center bg-gray-200 p-2 rounded-md">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex-1 text-center py-2 px-4 ${
            location.pathname === step.path ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          {step.id}. {step.name}
        </div>
      ))}
    </div>
  );
}
