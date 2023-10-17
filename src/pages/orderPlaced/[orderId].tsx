import dynamic from 'next/dynamic';

const OrderPlaced = dynamic(() => import('orderPlaced/orderPlaced'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const OrderPlacedPage = () => <OrderPlaced />;

export default OrderPlacedPage;
