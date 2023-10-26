import dynamic from 'next/dynamic';

const OrderPlaced = dynamic(() => import('orderPlaced/orderPlaced'), {
  ssr: false,
  loading: () => <></>,
});

const OrderPlacedPage = () => <OrderPlaced />;

export default OrderPlacedPage;
