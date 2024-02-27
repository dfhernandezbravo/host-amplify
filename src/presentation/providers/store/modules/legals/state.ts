export type LegalLiks = {
  id: string;
  label: string;
  isActive: boolean;
  isDefault: boolean;
  redirect: {
    to: string;
    target: string | null;
    url: string;
  };
};

export type LegalsState = {
  links: LegalLiks[];
};

export const initialStateLegals: LegalsState = { links: [] };
