import React, { useState } from "react";
import { apiRequest } from "../services/api";

export default function ReportGenerator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [report, setReport] = useState("");

  const gen = async () => {
    const res = await apiRequest("generateReport", { from, to });
    setReport(res.report);
  };

  return (
    <div>
      <h2>Tạo báo cáo tự động</h2>
      <input placeholder="from" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input placeholder="to" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={gen}>Tạo</button>
      <textarea value={report} rows="15" />
    </div>
  );
}
