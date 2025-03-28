import { useNavigate } from "react-router-dom";

// set ไว้ให้เป็นตัวอย่าง
const rooms = [
  { id: 1, name: "Size M | ขนาด 26 ตร.ม.", price: "6,500/เดือน", available: 3, image: "/photo/sizem.jpg" },
  { id: 2, name: "Size L | ขนาด 34 ตร.ม.", price: "7,500/เดือน", available: 2, image: "/photo/sizel.jpg" },
  { id: 3, name: "Size XL | ขนาด 40 ตร.ม.", price: "8,500/เดือน", available: 1, image: "/photo/sizexl.jpg" },
];




export default function FloorPlans() {
  const navigate = useNavigate();

  const selectRoom = (room) => {
    localStorage.setItem("selectedRoom", JSON.stringify(room)); // บันทึกห้องที่เลือก
    navigate("/apartment"); // เปลี่ยนไปหน้าถัดไป
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center">เลือกขนาดห้อง</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border p-4 rounded-lg shadow-md bg-white flex flex-col items-center"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-60 h-60 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">{room.name}</h3>
            <p className="text-gray-600 text-center">{room.price}</p>
            <button
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => selectRoom(room)}
            >
              ({room.available}) ว่างอยู่
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
