import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/router';
export enum To {
  Local = 'local',
  External = 'external',
}
interface Redirect {
  to: To;
  target: Target | null;
  url: string;
}
enum Target {
  Blank = '_blank',
  Parent = '_parent',
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
    isDefault: false,
    redirect: {
      to: To.Local,
      target: null,
      url: 'cotizacion-de-pedido',
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
      url: 'mis-favoritos',
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
      url: 'mis-tarjetas',
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
      url: 'pedidos',
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
      url: 'mi-organizacion',
    },
  },
  {
    id: 'mi-perfil',
    label: 'Mi perfil',
    isActive: true,
    isDefault: true,
    redirect: {
      to: To.Local,
      target: null,
      url: 'mi-perfil',
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
      url: 'autenticacion',
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
      url: 'direcciones',
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

export const ROOT_PATH = 'mi-cuenta';
interface SidebarProps {
  display: string;
}

const SidebarComponent = dynamic(() => import(`account/sidebar`), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
}) as React.FC<SidebarProps>;

const Index = () => {
  const router = useRouter();
  const breakpoints = useBreakpoints();
  const routeByDefault = SIDEBAR_ROUTES.find((route) => route.isDefault);
  if (breakpoints.active !== 'xs' && routeByDefault) {
    router.push(`/${ROOT_PATH}/${routeByDefault.redirect.url}`);
  }
  return <SidebarComponent display="block" />;
  // return SidebarComponent({ display: 'block' });
};

export default Index;
