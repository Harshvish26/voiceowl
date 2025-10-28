import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import connectDB from "./db";

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}).catch(err => {
  console.error("DB connect error:", err);
  process.exit(1);
});
