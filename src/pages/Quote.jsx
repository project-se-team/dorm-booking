import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quote() {
  const navigate = useNavigate();
  const [depositPaid, setDepositPaid] = useState(false);

  // set ไว้ให้เป็นตัวอย่าง
  const roomPrice = 6000;
  const contractFee = 10000;
  const depositFee = 3000;
  const totalPrice = roomPrice + contractFee + depositFee;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">สรุปใบเสนอราคา</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ul className="text-gray-700 space-y-2">
          <li className="flex justify-between">
            <span>ค่าห้องพัก:</span>
            <span>{roomPrice.toLocaleString()} บาท</span>
          </li>
          <li className="flex justify-between">
            <span>ค่าสัญญา:</span>
            <span>{contractFee.toLocaleString()} บาท</span>
          </li>
          <li className="flex justify-between">
            <span>ค่ามัดจำ:</span>
            <span>{depositFee.toLocaleString()} บาท</span>
          </li>
          <li className="border-t mt-2 pt-2 flex justify-between font-bold">
            <span>ยอดรวม:</span>
            <span>{totalPrice.toLocaleString()} บาท</span>
          </li>
        </ul>
      </div>

      {/* ส่วนชำระค่ามัดจำ */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-700">ต้องชำระค่ามัดจำก่อน</h3>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="payDeposit"
            className="w-5 h-5"
            checked={depositPaid}
            onChange={() => setDepositPaid(!depositPaid)}
          />
          <label htmlFor="payDeposit" className="ml-2 text-gray-700 cursor-pointer">
            ฉันได้ชำระค่ามัดจำแล้ว
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg" onClick={() => navigate(-1)}>
          กลับ
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            depositPaid ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => depositPaid && alert("การจองเสร็จสิ้น!")}
          disabled={!depositPaid}
        >
          ยืนยันการจอง
        </button>
      </div>
    </div>
  );
}
