// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type ReviewType = {
  approved: boolean;
  id: string;
  locale: string;
  location: null;
  pastReviews: null;
  productId: string;
  rating: number;
  reviewDateTime: string;
  reviewerName: string;
  searchDate: Date;
  shopperId: string;
  sku: null;
  text: string;
  title: string;
  verifiedPurchaser: boolean;
};
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
    const reviewCreated = response.data.data.map((review: ReviewType) => {
      return {
        ...review,
        created: review.reviewDateTime,
      };
    });

    const newSignature = {
      average: 4,
      range: response.data.range,
      reviews: reviewCreated,
    };

    res.status(200).json(newSignature);
  } catch (error) {
    console.error('Error', error);
  }
}
