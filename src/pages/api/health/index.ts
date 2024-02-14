// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  console.info(' >>>>:: TEST HEALT HOST HEADLESS ::<<<< ');
  res.status(200).json({ message: 'healt test' });
}
