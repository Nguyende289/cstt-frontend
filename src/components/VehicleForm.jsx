import React, { useState } from "react";
import { addRow } from "../services/sheetService";

export default function VehicleForm({ onSaved }) {
  const [form, setForm] = useState({
    date: "",
    type: "",
    quantity: 0,
    amount: 0
  });

  const save = async () => {
    await addRow("Vehicle_Registration", form);
    alert("Đã lưu!");
    onSaved && onSaved();
  };

  return (
    <div>
      <h2>Nhập kết quả đăng ký xe</h2>
      {Object.keys(form).map((f) => (
        <input
          key={f}
          placeholder={f}
          value={form[f]}
          onChange={(e) => setForm({ ...form, [f]: e.target.value })}
        />
      ))}
      <button onClick={save}>Lưu</button>
    </div>
  );
}
