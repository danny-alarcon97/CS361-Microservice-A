import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors()); // Enable CORS

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'images' directory
app.use("/images", express.static(path.join(__dirname, "images")));

// Define a route to generate random backgrounds
app.get("/api/backgrounds/random", (req, res) => {
  const backgrounds = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background3.jpg",
    "/images/background4.jpg",
    "/images/background5.jpg",
  ];
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  res.json({ background: randomBackground });
});

app.listen(PORT, () => {
  console.log(`Background service running on port ${PORT}`);
});
