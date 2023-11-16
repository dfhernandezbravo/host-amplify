import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const MyProfileComponent = dynamic(() => import(`account/mi-perfil`), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});

const MyTargetsComponent = dynamic(() => import(`account/mis-tarjetas`), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});

const OrderQuoteComponent = dynamic(
  () => import('account/cotizacion-de-pedido'),
  {
    ssr: false,
    loading: () => <h1>Cargando ...</h1>,
  },
);
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
    case 'mis-compras':
      return <MyPurchasesComponent />;
    case 'mis-tarjetas':
      return <MyTargetsComponent />;
    case 'mi-perfil':
      return <MyProfileComponent />;
    default:
      return <MyProfileComponent />;
  }
};

export default Content;

// const MyTargetsPage = () => <MyTargetsComponent />;

// export default MyTargetsPage;
