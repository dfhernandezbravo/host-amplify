import { ComponentType } from 'react';

export type AccountPaths =
  | 'order-quotation'
  | 'favorites'
  | 'cards'
  | 'orders'
  | 'organization'
  | 'profile'
  | 'authentication'
  | 'addresses'
  | 'purchases';

export type AccountComponentProps = {
  [key in AccountPaths]: ComponentType<{}>;
};

export enum To {
  Local = 'local',
  External = 'external',
}
enum Target {
  Blank = '_blank',
  Parent = '_parent',
}
interface Redirect {
  to: To;
  target: Target | null;
  url: string;
}
export interface SidebarRoute {
  id: string;
  label: string;
  isActive: boolean;
  isDefault: boolean;
  redirect: Redirect;
}

const SIDEBAR_ROUTES: SidebarRoute[] = [
  {
    id: 'cotizacion-de-pedido',
    label: 'Cotización de pedido',
    isActive: true,
    isDefault: true,
    redirect: {
      to: To.Local,
      target: null,
      url: 'order-quotation',
    },
  },
  {
    id: 'mis-favoritos',
    label: 'Mis favoritos',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'favorites',
    },
  },
  {
    id: 'mis-tarjetas',
    label: 'Mis tarjetas',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'cards',
    },
  },
  {
    id: 'pedidos',
    label: 'Pedidos',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'orders',
    },
  },
  {
    id: 'mi-organizacion',
    label: 'Mi organización',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'organization',
    },
  },
  {
    id: 'mi-perfil',
    label: 'Mi perfil',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'profile',
    },
  },
  {
    id: 'autenticacion',
    label: 'Autenticación',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'authentication',
    },
  },
  {
    id: 'direcciones',
    label: 'Direcciones',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'addresses',
    },
  },
  {
    id: 'mis-compras',
    label: 'Mis compras',
    isActive: true,
    isDefault: false,
    redirect: {
      to: To.External,
      target: Target.Blank,
      url: 'https://ayuda.easy.cl/mis-compras',
    },
  },
];

export default SIDEBAR_ROUTES;
