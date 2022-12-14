import type { NextApiRequest, NextApiResponse } from "next";
import type { Image } from "../../interfaces";

const images: Image[] = [
  { id: 1, src: "/bitcoin.jpg" }
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(images);
}
