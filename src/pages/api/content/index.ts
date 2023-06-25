import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_URL}/home-headless`,
      {
        headers:{
            apikey: `${process.env.NEXT_PUBLIC_CMS_API_KEY}`
        }
      }
    );
    console.log("DATA --->:", data)
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}