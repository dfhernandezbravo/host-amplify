import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  //https://cl-ccom-cms-delivery.ecomm.cencosud.com/views/cl/easy/EasyWeb
  try {
    //console.log('key:', `${process.env.NEXT_PUBLIC_CMS_API_KEY}`);
    const event: string = `${_req.query.event}`;
    /* console.log(
      'route:',
      `${`${process.env.NEXT_PUBLIC_CMS_URL}/event/${event}`}`,
    ); */
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_URL}/home-headless/event/${event}`,
      {
        headers: {
          apikey: `${process.env.NEXT_PUBLIC_CMS_API_KEY}`,
        },
      },
    );
    res.json(data);
  } catch (error) {
    console.error(error);
  }
}
