import { useState } from "react";
import { useNavigate } from "react-router-dom";


  // set ไว้ให้เป็นตัวอย่าง
const availableRooms = [
  { id: "0403", name: "ห้อง #0403", price: "7,500/เดือน", moveIn: "4 มิถุนายน , 2025", amenities: ["Internet Free 30Mbps ", "หาของกินได้สะดวก ใกล้ 7-Eleven", "ตู้น้ำหยอดเหรียญ", 
    "มีกล้องวงจรปิดครอบคลุมทุกจุด", "เครื่องซักผ้าหยอดเหรียญ"
  ] },
  { id: "0203", name: "ห้อง #0203", price: "7,500/เดือน", moveIn: "18 มกราคม , 2025", amenities: ["Internet Free 30Mbps ", "หาของกินได้สะดวก ใกล้ 7-Eleven", "ตู้น้ำหยอดเหรียญ",
    "มีกล้องวงจรปิดครอบคลุมทุกจุด","เครื่องซักผ้าหยอดเหรียญ"
  ] }
];

export default function Apartment() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setShowPopup(true);
  };

  const confirmCancel = () => {
    setSelectedRoom(null);
    setShowPopup(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">ห้องที่ว่าง</h2>
      <div className="mt-4">
        {availableRooms.map((room) => (
          <div
            key={room.id}
            className={`border p-4 rounded-lg shadow-md bg-white mb-4 cursor-pointer ${
              selectedRoom?.id === room.id ? "border-blue-500" : ""
            }`}
            onClick={() => setSelectedRoom(room)}
          >
            <h3 className="text-lg font-semibold">{room.name}</h3>
            <p className="text-gray-600">{room.price}</p>
            <p className="text-gray-500">สามารถเข้าอยู่ได้ในวันที่/เดือน: {room.moveIn}</p>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-lg font-semibold">เลือกห้อง: {selectedRoom.name}</h3>
          <p className="text-gray-600">ราคา: {selectedRoom.price}</p>
          <p className="text-gray-500">เข้าอยู่ได้: {selectedRoom.moveIn}</p>
          <h4 className="mt-2 font-semibold">สิ่งอำนวยความสะดวก:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {selectedRoom.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 flex justify-between gap-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={() => navigate(-1)}
        >
          กลับ
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedRoom ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          onClick={() => selectedRoom && navigate("/lease-terms")}
          disabled={!selectedRoom}
        >
          ไปต่อ
        </button>

        {selectedRoom && (
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto"
            onClick={handleCancel}
          >
            ยกเลิกการจอง
          </button>
        )}
      </div>

      {/* Popup ยืนยันการยกเลิก */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-xl font-bold">ยืนยันการยกเลิก</h2>
            <p>คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการจอง?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                ยืนยันยกเลิก
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                กลับ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
