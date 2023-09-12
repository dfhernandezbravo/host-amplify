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

  const skus: string[] = req.body;

  let result = '';

  for (let i = 0; i < skus.length; i++) {
    result += `fq=skuId:${skus[i]}${i !== skus.length - 1 ? '&' : ''}`;
  }

  const { data } = await axios.get(
    `https://easycl.vtexcommercestable.com.br/api/catalog_system/pub/products/search?${result}`,
  );
  res.json(data);
}
