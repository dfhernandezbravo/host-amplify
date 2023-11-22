// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  try {
    const { data } = await axios.get(
      `https://easyclqa.myvtex.com/api/catalog_system/pub/products/search?fq=alternateIds_RefId:${_req.query.sku}`,
    );
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    /* Empty */
  }
}
