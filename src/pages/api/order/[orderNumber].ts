// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Order } from './order.response';
import extractEmail from '@/helpers/extracEmail';

type ResponseData = Order | { message: string };

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<ResponseData>,
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

  const { data } = await axios.get<Order>(
    `https://easyclqa.myvtex.com/api/oms/pvt/orders/${orderNumber}-01`,
    { headers },
  );
  const orderPlaced = {
    orderId: data.orderId,
    orderNumber: data.sequence,
    customer: {
      email: extractEmail(data.clientProfileData.email),
    },
    creationDate: data.creationDate,
  };

  res.json(orderPlaced);
}
