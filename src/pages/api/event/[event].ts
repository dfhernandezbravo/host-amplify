import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const event: string = `${_req.query.event}`;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_URL}/home-headless/event/${event}`,
      {
        headers: {
          apikey: `${process.env.NEXT_PUBLIC_CMS_API_KEY}`,
        },
      },
    );
    res.json(data);
  } catch (error) {
    console.error(error);
  }
}
