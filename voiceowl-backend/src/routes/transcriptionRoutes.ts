import { Router } from "express";
import { postTranscription, getTranscriptions } from "../controllers/transcriptionController";
import Transcription from "../models/Transcription"; 

const router = Router();

router.post("/transcription", postTranscription);
router.get("/transcriptions", getTranscriptions);


router.put("/transcription/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ["transcription", "review", "approved"];

    // validate status value
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const updated = await Transcription.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Transcription not found" });
    }

    res.json({
      message: "Status updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
