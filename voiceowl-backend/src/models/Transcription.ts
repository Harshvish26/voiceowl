import mongoose from "mongoose";

const TranscriptionSchema = new mongoose.Schema({
  audioUrl: { type: String, required: true },
  transcription: { type: String, required: true },
  source: { type: String, default: "mock" },
  createdAt: { type: Date, default: Date.now }
});

TranscriptionSchema.index({ createdAt: 1 });

export default mongoose.model("Transcription", TranscriptionSchema);
