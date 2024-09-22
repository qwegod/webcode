import express from "express";
import cors from "cors";
import { Response, Request } from "express";
import nodeHtmlToImage from "node-html-to-image";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.text());

app.post("/export", async (req: Request, res: Response) => {
  const html = req.body;
  const outputPath = path.join(__dirname, "image.png");

  try {
    await nodeHtmlToImage({
      output: outputPath,
      html: html,
    });
    console.log("The image was created successfully!");

    res.download(outputPath, "image.png", (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send("Error sending file");
      }
    });
  } catch (error) {
    console.error("Error creating image:", error);
    res.status(500).send("Error creating image");
  }
});

app.listen(port, () => console.log("Backend server started"));
