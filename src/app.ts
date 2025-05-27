import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Request, Response } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = process.cwd();

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    console.log("Received GET request");
    res.send("Hello from webhook test server!");
});

app.post("/", (req: Request, res: Response) => {
    console.log("Received POST request with body:", req.body);
    res.json({
        status: "success",
        message: "Webhook received!",
        receivedData: req.body,
    });
});

app.get("/download/list", (req: Request, res: Response) => {
    const downloadsDir = path.join(projectRoot, "downloads");
    console.log(downloadsDir);

    if (!fs.existsSync(downloadsDir)) {
        res.json({
            files: [],
            message: "Downloads directory not found",
        });
        return;
    }

    const files = fs.readdirSync(downloadsDir).filter((file) => {
        return fs.statSync(path.join(downloadsDir, file)).isFile();
    });

    res.json({ files });
});

app.get("/download/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(projectRoot, "downloads", filename);

    if (!fs.existsSync(filePath)) {
        res.status(404).send("File not found");
        return;
    }

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/octet-stream");

    res.download(filePath);
});

export default app;
