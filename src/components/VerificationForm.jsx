import React, { useState } from "react";
import { apiRequest } from "../services/api";

export default function VerificationForm() {
  const [form, setForm] = useState({
    doc_no: "",
    doc_date: "",
    name: "",
    cccd: "",
    birthyear: "",
    address: "",
    violation: "",
    result: ""
  });

  const save = async () => {
    await apiRequest("saveVerification", form);
    alert("Đã lưu xác minh!");
  };

  return (
    <div>
      <h2>Lưu kết quả xác minh</h2>
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
