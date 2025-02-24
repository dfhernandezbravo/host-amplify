// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_WEB_URL}/search/popular`,
    );
    res.json(data);
  } catch (error) {
    console.error(error);
  }
}
