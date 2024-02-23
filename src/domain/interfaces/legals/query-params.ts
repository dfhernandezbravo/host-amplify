import { ParsedUrlQuery } from 'querystring';

export type LegalsQueryParamns = ParsedUrlQuery & {
  content: string;
};
