
474 B
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const { data } = await axios.get(
      'https://cl-ccom-easy-bff-mobile.ecomm-stg.cencosud.com/products/search/popular',
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}