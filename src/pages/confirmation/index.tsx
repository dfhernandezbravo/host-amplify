import dynamic from 'next/dynamic';

const Confirmation = dynamic(() => import('confirmation/confirmation'), {
  ssr: false,
  loading: () => <h1>Cargando ...</h1>,
});

const ConfirmationPage = () => <Confirmation />;

export default ConfirmationPage;
