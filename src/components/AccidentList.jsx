import React, { useEffect, useState } from "react";
import { readSheet } from "../services/sheetService";

export default function AccidentList() {
  const [list, setList] = useState([]);

  const load = async () => {
    const res = await readSheet("Traffic_Accidents");
    setList(res);
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>Danh sách TNGT</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Nội dung</th>
            <th>Đơn vị</th>
            <th>Kết quả</th>
            <th>Chết</th>
            <th>Bị thương</th>
          </tr>
        </thead>
        <tbody>
          {list.map((r, i) => (
            <tr key={i}>
              <td>{r.date}</td>
              <td>{r.content}</td>
              <td>{r.unit}</td>
              <td>{r.result}</td>
              <td>{r.dead}</td>
              <td>{r.injured}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
