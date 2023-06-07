import dynamic from 'next/dynamic';

const RemotePdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => (
    <p style={{ height: '80px', width: '100vw' }}>Loading pdp...</p>
  ),
});

const Pdp = () => {
  return <RemotePdp/>
};
export default Pdp;