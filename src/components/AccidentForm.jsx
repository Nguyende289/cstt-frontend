import React, { useState } from "react";
import { addRow } from "../services/sheetService";

export default function AccidentForm({ onSaved }) {
  const [form, setForm] = useState({
    date: "",
    content: "",
    result: "",
    dead: 0,
    injured: 0,
    damage: 0,
    alcohol: 0,
    unit: ""
  });

  const save = async () => {
    await addRow("Traffic_Accidents", form);
    alert("Đã lưu!");
    onSaved && onSaved();
  };

  return (
    <div>
      <h2>Nhập vụ việc TNGT</h2>
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
