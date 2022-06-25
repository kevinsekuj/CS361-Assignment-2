import { getImageSrv, getPRNG, postImageSrv, postPRNG } from "./service";

export const fetchImage = async () => {
  await postPRNG();
  await sleep();
  const prngResponse = await getPRNG();

  await postImageSrv(prngResponse.data);
  await sleep();

  const imageSrc = await getImageSrv();
  if (!imageSrc?.data) throw Error("Image fetch failed.");

  return imageSrc.data;
};

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));
