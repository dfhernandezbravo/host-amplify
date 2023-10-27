import dynamic from 'next/dynamic';

const OrderPlaced = dynamic(() => import('orderPlaced/orderPlaced'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});

const OrderPlacedPage = () => <OrderPlaced />;

export default OrderPlacedPage;
