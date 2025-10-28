import Transcription from "../models/Transcription";
import { mockDownload, mockTranscribe } from "../utils/mockDownloadAndTranscribe";

export async function createTranscription(audioUrl: string, source = "mock") {
  const buffer = await mockDownload(audioUrl);
  const text = await mockTranscribe(buffer);
  return await Transcription.create({ audioUrl, transcription: text, source });
}

export async function getRecentTranscriptions(days = 30) {
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return await Transcription.find({ createdAt: { $gte: since } }).sort({ createdAt: -1 }).limit(1000);
}
