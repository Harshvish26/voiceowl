import express from "express";
import cors from "cors";
import transcriptionRoutes from "./routes/transcriptionRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", transcriptionRoutes);

app.get("/", (req, res) => res.send("VoiceOwl API working ✅"));

app.use((err: any, req: express.Request, res: express.Response, next: any) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
