import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import React from 'react';
import dynamic from 'next/dynamic';
import { AccountComponentProps } from '@/@types/account';

const OrderQuoteComponent = dynamic(
  () => import('account/cotizacion-de-pedido'),
  { ssr: false, loading: () => <LogoLoader /> },
);
const MyfavoritesComponent = dynamic(() => import('account/mis-favoritos'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const MyTargetsComponent = dynamic(() => import('account/mis-tarjetas'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const OrdersComponent = dynamic(() => import('account/pedidos'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const MyOrganizationComponent = dynamic(
  () => import('account/mi-organizacion'),
  { ssr: false, loading: () => <LogoLoader /> },
);
const MyProfileComponent = dynamic(() => import('account/mi-perfil'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const AuthenticationComponent = dynamic(() => import('account/autenticacion'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const AddressComponent = dynamic(() => import('account/direcciones'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const MyPurchasesComponent = dynamic(() => import('account/mis-compras'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const AccountComponents: AccountComponentProps = {
  'cotizacion-de-pedido': OrderQuoteComponent,
  'mis-favoritos': MyfavoritesComponent,
  'mis-tarjetas': MyTargetsComponent,
  pedidos: OrdersComponent,
  'mi-organizacion': MyOrganizationComponent,
  'mi-perfil': MyProfileComponent,
  autenticacion: AuthenticationComponent,
  direcciones: AddressComponent,
  'mis-compras': MyPurchasesComponent,
};

export default AccountComponents;
