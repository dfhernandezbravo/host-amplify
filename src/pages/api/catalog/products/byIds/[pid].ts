// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const pid: string | any = _req.query.pid || "";
    const splitIds = pid.split(",");
    let result = ""
    console.log("pid producst ID:", pid)
    for (let i = 0; i < splitIds.length; i++) {
      result += `fq=productId:${splitIds[i]}${i !== splitIds?.length - 1 ? "&" : ""}`
    }
    const { data } = await axios.get(
      `https://www.easy.cl/api/catalog_system/pub/products/search?${result}`
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
