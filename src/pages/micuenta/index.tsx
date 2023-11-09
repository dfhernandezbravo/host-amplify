import dynamic from 'next/dynamic';

const Micuenta = dynamic(() => import('micuenta/micuenta'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});

const OrderPlacedPage = () => <Micuenta />;

export default OrderPlacedPage;
