import { ComponentType } from 'react';

export type LegalsPaths = 'terms-and-conditions';

export type LegalsComponentProps = {
  [key in LegalsPaths]: ComponentType<{}>;
};
