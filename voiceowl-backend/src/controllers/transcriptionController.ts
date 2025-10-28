import { Request, Response } from "express";
import { createTranscription, getRecentTranscriptions } from "../services/transcriptionService";

export async function postTranscription(req: Request, res: Response) {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "audioUrl is required" });
    const result = await createTranscription(audioUrl);
    res.status(201).json({ message: "Transcription saved", id: result._id });
  } catch (err) {
    console.error("postTranscription error:", err);
    res.status(500).json({ error: "Failed to process transcription" });
  }
}

export async function getTranscriptions(req: Request, res: Response) {
  try {
    const days = req.query.days ? Number(req.query.days) : 30;
    const data = await getRecentTranscriptions(days);
    res.json({ count: data.length, data });
  } catch (err) {
    console.error("getTranscriptions error:", err);
    res.status(500).json({ error: "Failed to fetch" });
  }
}
