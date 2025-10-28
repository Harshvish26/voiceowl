import { Router } from "express";
import { postTranscription, getTranscriptions } from "../controllers/transcriptionController";

const router = Router();

router.post("/transcription", postTranscription);
router.get("/transcriptions", getTranscriptions);

export default router;
