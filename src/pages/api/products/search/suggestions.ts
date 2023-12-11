import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type QueryResponse = {
  data: {
    productSearch: {
      products: {
        productId: string;
        productName: string;
        brand: string;
        description: string;
        items: {
          name: string;
          images: {
            imageUrl: string;
            imageTag: string;
            imageLabel: string;
          }[];
          sellers: {
            commertialOffer: {
              Price: number;
              ListPrice: number;
            };
          };
        }[];
      };
    };
  };
};

async function getData(
  query: Partial<{
    [key: string]: string | string[];
  }>,
  selectedFacets: { key: string; value: string },
) {
  const { data } = await axios.post<QueryResponse>(
    `${process.env.NEXT_PUBLIC_VTEX_GRAPHQL}`,
    {
      query: `
        query {
          productSearch(
            fullText: "${query.fullText}", 
            to: 4,
            selectedFacets: [
              {
                key: "${selectedFacets ? selectedFacets.key : ''}"
                value: "${selectedFacets ? selectedFacets.value : ''}"
              }
            ]
          ) @context(provider: "vtex.search-graphql") {
            products {
              productId
              productName
              brand
              link
              description
              items {
                name
                images {
                  imageUrl
                  imageTag
                  imageLabel
                }
                sellers {
                  commertialOffer {
                    Price
                    ListPrice
                  }
                }
              }
            }
          }
        }
      `,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return data.data.productSearch;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(500).send('Method not allowed');
  }

  const { query, body } = req;
  const { selectedFacets } = body;

  if (query.fullText === '' && !selectedFacets) {
    res.json({ products: [] });
  }

  try {
    res.json(await getData(query, selectedFacets));
  } catch (error) {
    res.status(500).json(error);
  }
}
