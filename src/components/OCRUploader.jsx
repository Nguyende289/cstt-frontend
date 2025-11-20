import React, { useState } from "react";
import { apiRequest } from "../services/api";

export default function OCRUploader() {
  const [text, setText] = useState("");

  const upload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result.split(",")[1];
      const res = await apiRequest("ocrExtract", { base64 });
      setText(res.text);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>AI OCR – Trích xuất văn bản</h2>
      <input type="file" onChange={upload} />
      <textarea value={text} rows="10" />
    </div>
  );
}
