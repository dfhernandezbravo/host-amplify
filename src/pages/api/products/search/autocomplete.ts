import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type DataResponse = {
  searches: {
    value: string;
  }[];
  categories: {
    key: string;
    value: string;
    labelValue: string;
  }[];
};

type QueryResponse = {
  data: {
    autocompleteSearchSuggestions: {
      searches: {
        term: string;
        attributes:
          | {
              key: string;
              value: string;
              labelValue: string;
            }[]
          | null;
      }[];
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  const { query } = req;

  if (query.query === "") {
    res.json({ searches: [], categories: [] });
  }
  try {
    const { data } = await axios.post<QueryResponse>(
      `${process.env.NEXT_PUBLIC_VTEX_GRAPHQL}`,
      {
        query: `
          {
            autocompleteSearchSuggestions(fullText: "${query.query}") @context(provider: "vtex.search-graphql") {
              searches {
                term
                attributes {
                  key
                  value
                  labelValue
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { searches } = data.data.autocompleteSearchSuggestions;

    const dataResponse: DataResponse = {
      searches: searches.map((search) => ({
        value: search.term,
      })),
      categories: searches[0].attributes || [],
    };
    res.json(dataResponse);
  } catch (error) {
    console.log(error);
  }
}
