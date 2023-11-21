import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const OrderQuoteComponent = dynamic(
  () => import(`account/cotizacion-de-pedido`),
  {
    ssr: false,
    loading: () => <h1>Cargando ...</h1>,
  },
);
const MyfavoritesComponent = dynamic(() => import(`account/mis-favoritos`), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});
const MyTargetsComponent = dynamic(() => import(`account/mis-tarjetas`), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});
const OrdersComponent = dynamic(() => import('account/pedidos'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});
const MyOrganizationComponent = dynamic(
  () => import('account/mi-organizacion'),
  {
    ssr: false,
    loading: () => <h1>Cargando ...</h1>,
  },
);
const MyProfileComponent = dynamic(() => import('account/mi-perfil'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});
const AuthenticationComponent = dynamic(() => import('account/autenticacion'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});
const AddressComponent = dynamic(() => import('account/direcciones'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});
const MyPurchasesComponent = dynamic(() => import('account/mis-compras'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});

const Content = () => {
  const router = useRouter();
  const { content } = router.query;

  switch (content as string) {
    case 'cotizacion-de-pedido':
      return <OrderQuoteComponent />;
    case 'mis-favoritos':
      return <MyfavoritesComponent />;
    case 'mis-tarjetas':
      return <MyTargetsComponent />;
    case 'pedidos':
      return <OrdersComponent />;
    case 'mi-organizacion':
      return <MyOrganizationComponent />;
    case 'mi-perfil':
      return <MyProfileComponent />;
    case 'autenticacion':
      return <AuthenticationComponent />;
    case 'direcciones':
      return <AddressComponent />;
    case 'mis-compras':
      return <MyPurchasesComponent />;
    default:
      return <MyProfileComponent />;
  }
};
export default Content;
