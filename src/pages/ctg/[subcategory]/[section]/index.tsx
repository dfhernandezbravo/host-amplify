import dynamic from 'next/dynamic';

const RemotePlp = dynamic(() => import('plp/plp'), {
  ssr: false,
  loading: () => (
    <p style={{ height: '80px', width: '100vw' }}>Loading pdp...</p>
  ),
});

const PlpSection = () => {
  return (
    <div>
      <RemotePlp/><h1>+ By Section</h1>
    </div>
  )
};
export default PlpSection;