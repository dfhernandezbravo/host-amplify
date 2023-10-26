// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const { orderNumber } = req.query;

  const headers = {
    'X-VTEX-API-AppKey': process.env.NEXT_PUBLIC_ORDERS_API_KEY,
    'X-VTEX-API-AppToken': process.env.NEXT_PUBLIC_ORDERS_TOKEN,
  };

  const { data } = await axios.get(
    `https://easyclqa.myvtex.com/api/oms/pvt/orders/${orderNumber}-01`,
    { headers },
  );
  res.json(data);
}
