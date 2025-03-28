import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LeaseTerms() {
  const [accepted, setAccepted] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const navigate = useNavigate();

  const leaseTermsOptions = ["6 เดือน", "10 เดือน", "12 เดือน"];

  const isTermSelected = selectedTerm !== null;

  const handleTermSelection = (term) => {
    setSelectedTerm(selectedTerm === term ? null : term);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">เลือกระยะเวลาสัญญาเช่า</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ul className="list-none space-y-2 text-gray-700">
          {leaseTermsOptions.map((term) => (
            <li key={term} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="leaseTerm"
                value={term}
                checked={selectedTerm === term}
                onChange={() => handleTermSelection(term)}
                className="w-5 h-5"
              />
              <span>{term}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-center mt-6">สัญญาเช่าที่พัก</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ul className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>ผู้เช่าต้องชำระค่าเช่าภายในวันที่กำหนดของแต่ละเดือน</li>
          <li>ห้ามนำสัตว์เลี้ยงเข้ามาในที่พักโดยไม่ได้รับอนุญาต</li>
          <li>ค่าน้ำ 10 บาท/หน่วย ค่าไฟ 8 บาท/หน่วย</li>
          <li>ห้ามส่งเสียงดังรบกวนผู้อื่นในช่วงเวลา 22:00 - 07:00 น.</li>
          <li>ต้องแจ้งล่วงหน้าอย่างน้อย 30 วันก่อนย้ายออก</li>
        </ul>
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="accept"
            className="w-5 h-5"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          <label htmlFor="accept" className="ml-2 text-gray-700 cursor-pointer">
            ฉันยอมรับเงื่อนไขการเช่า
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg" onClick={() => navigate(-1)}>
          กลับ
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            accepted && isTermSelected ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => accepted && isTermSelected && navigate("/quote")}
          disabled={!accepted || !isTermSelected}
        >
          ไปต่อ
        </button>
      </div>
    </div>
  );
}
