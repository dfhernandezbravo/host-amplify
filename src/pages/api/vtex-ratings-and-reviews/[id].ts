// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function getProductReviews(
  _req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>,
) {
  const { query } = _req;

  const url = `https://easyclqa.myvtex.com/reviews-and-ratings/api/reviews?from=0&to=50&order_by=asc&product_id=${query.id}`;

  try {
    const response = await axios.get(url);

    // eslint-disable-next-line no-debugger
    // console.log('response',response)
    // console.log('data', response.data.range)
    const newSignature = {
      average: 2,
      range: response.data.range,
      reviews: response.data.data,
    };

    res.status(200).json(newSignature);
  } catch (error) {
    console.log('Error', error);
  }
}
