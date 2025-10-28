import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState<any[]>([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/transcription", { audioUrl: url });
      setMessage(`✅ Saved with ID: ${res.data.id}`);
    } catch (err:any) {
      setMessage("Error: " + (err?.response?.data?.error || err.message));
    }
  };

  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/transcriptions");
      setData(res.data.data || []);
    } catch (err:any) {
      setMessage("Error: " + (err?.response?.data?.error || err.message));
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h2>🎙️ VoiceOwl Transcription Tester</h2>
      <input
        style={{ width: 420, padding: 8 }}
        placeholder="Enter audio URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: 8 }}>Transcribe</button>
      <button onClick={loadData} style={{ marginLeft: 8 }}>Load Transcriptions</button>
      <p>{message}</p>
      <ul>
        {data.map((d) => (
          <li key={d._id}>{d.audioUrl} → {d.transcription}</li>
        ))}
      </ul>
    </div>
  );
}
