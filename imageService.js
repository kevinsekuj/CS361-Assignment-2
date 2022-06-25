import * as fs from "node:fs/promises";
const READ_FN = "prng-service.txt";
const WRITE_FN = "image-service.txt";
const IMAGES_COUNT = 5;
const INTERVAL = 1000;

while (true) {
  await new Promise(resolve => setTimeout(resolve, INTERVAL));
  const data = await fs.readFile(READ_FN, { encoding: "utf8" });

  if (data && !isNaN(data)) {
    const index = (data % IMAGES_COUNT) + 1;
    await fs.writeFile(WRITE_FN, `images/${index}.jpg`);
  }
}
