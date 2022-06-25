import * as fs from "node:fs/promises";
const FN = "prng-service.txt";
const PROCEED_MSG = "run";
const INTERVAL = 1000;

while (true) {
  await new Promise(resolve => setTimeout(resolve, INTERVAL));
  const data = await fs.readFile(FN, { encoding: "utf8" });

  if (data === PROCEED_MSG) {
    const randomNumber = Math.floor(Math.random() * Number.MAX_VALUE);
    await fs.writeFile(FN, randomNumber.toString());
  }
}
