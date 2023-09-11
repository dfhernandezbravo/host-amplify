// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const { data } = await axios.post(
    'https://cl-easy-vtex-personalize-hpa.ecomm.cencosud.com/api/recommendations',
    { ...req.body },
    {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_VTEX_PERSONALIZE_API_KEY,
      },
    },
  );
  res.json(data);
}
