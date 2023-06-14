// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { query } = req;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_MOBILE_URL_STG}/products/search/autocomplete`,
      {
        params: query,
      },
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}