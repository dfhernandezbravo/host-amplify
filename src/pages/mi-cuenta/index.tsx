import React from 'react';
export enum OptionType {
  Inside = 'IN',
  ExtLinkBlank = 'ELB',
  ExtLinkNoBlank = 'ELNB',
}

export interface SidebarRoute {
  path?: string;
  label: string;
  isActive: boolean;
  optionType: OptionType;
  targetLinkUrl?: string;
  position: number;
  isDefault: boolean;
}

const SIDEBAR_ROUTES: SidebarRoute[] = [
  {
    path: 'cotizacion-de-pedido',
    label: 'Cotización de pedido',
    isActive: true,
    optionType: OptionType.Inside,
    position: 1,
    isDefault: true,
  },
  {
    path: 'mis-compras',
    label: 'Mis compras',
    isActive: true,
    optionType: OptionType.Inside,
    position: 2,
    isDefault: false,
  },
  {
    label: 'Mis tarjetas',
    path: 'mis-tarjetas',
    isActive: true,
    optionType: OptionType.Inside,
    // optionType: OptionType.ExtLinkBlank,
    targetLinkUrl: 'https://www.google.com/',
    position: 3,
    isDefault: false,
  },
  {
    label: 'Mi perfil',
    path: 'mi-perfil',
    isActive: true,
    optionType: OptionType.Inside,
    // optionType: OptionType.ExtLinkNoBlank,
    targetLinkUrl: 'https://www.google.com/',
    position: 4,
    isDefault: false,
  },
];

const index = () => {
  return null;
};

export default index;

export async function getServerSideProps() {
  const routeByDefault = SIDEBAR_ROUTES.find((route) => route.isDefault);
  console.log('routeByDefault->', routeByDefault);

  if (routeByDefault) {
    return {
      redirect: {
        destination: `/mi-cuenta/${routeByDefault.path}`,
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
