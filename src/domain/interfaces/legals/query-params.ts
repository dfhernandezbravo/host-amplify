import { ParsedUrlQuery } from 'querystring';

export type LegalsQueryParamns = ParsedUrlQuery & {
  viewName: string;
};
