// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { groupName, paramName } = req.query;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL}/${groupName}/${paramName}`,
      { headers: { apikey: process.env.NEXT_PUBLIC_CMS_API_KEY } },
    );
    +res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
}
