import axios from "axios";
import {
  GET_IMAGE_ENDPOINT,
  WRITE_FILE_ENDPOINT,
  READ_FILE_ENDPOINT,
  MESSAGE,
  IMAGE_SERVICE,
  PRNG_SERVICE,
} from "./constants";

/**
 * UI calls PRNG Service by writing "run" to prng-service.txt
 */
export const postPRNG = async () => {
  try {
    await axios.post(WRITE_FILE_ENDPOINT, {
      data: MESSAGE,
      FN: PRNG_SERVICE,
    });
  } catch (e) {
    throw Error(e);
  }
};

/**
 * UI reads prng-service.txt to get pseudo random number
 *
 * @returns Number pseudo randomly generated number
 */
export const getPRNG = async () => {
  let response;
  try {
    response = await axios.get(READ_FILE_ENDPOINT);
    return response;
  } catch (e) {
    throw Error(e);
  }
};

/**
 * UI writes pseudo-random number to image-service.txt
 */
export const postImageSrv = async data => {
  try {
    await axios.post(WRITE_FILE_ENDPOINT, {
      data: data,
      FN: IMAGE_SERVICE,
    });
  } catch (e) {
    throw Error(e);
  }
};

/**
 *  UI reads image-service.txt then displays the image
 *
 * @returns String image path
 */
export const getImageSrv = async () => {
  let image;
  try {
    image = await axios.get(GET_IMAGE_ENDPOINT);
    return image;
  } catch (e) {
    throw Error(e);
  }
};
