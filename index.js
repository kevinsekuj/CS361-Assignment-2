import express from "express";
import cors from "cors";
import * as fs from "node:fs/promises";
const PORT = 3001;

const PRNG_FN = "prng-service.txt";
const IMAGE_FN = "image-service.txt";

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", async (req, res) => {
  const data = await fs.readFile(PRNG_FN, { encoding: "utf8" });
  res.json(data);
});

app.get("/image", async (req, res) => {
  const data = await fs.readFile(IMAGE_FN, { encoding: "utf8" });
  res.json(data);
});

app.post("/", async (req, res) => {
  const { data, FN } = req.body;
  await fs.writeFile(FN, data);
  res.json(null);
});

app.all("*", (req, res, next) => {
  next("Resource not found", 404);
});

app.use((err, req, res, next) => {
  res.json(err);
});
