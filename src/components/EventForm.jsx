import React, { useState } from "react";
import { apiRequest } from "../services/api";

export default function EventForm() {
  const [form, setForm] = useState({
    name: "",
    start_date: "",
    end_date: ""
  });

  const save = async () => {
    await apiRequest("createEvent", form);
    alert("Đã tạo sự kiện!");
  };

  return (
    <div>
      <h2>Tạo sự kiện</h2>
      {Object.keys(form).map((f) => (
        <input
          key={f}
          placeholder={f}
          value={form[f]}
          onChange={(e) => setForm({ ...form, [f]: e.target.value })}
        />
      ))}
      <button onClick={save}>Tạo sự kiện</button>
    </div>
  );
}
