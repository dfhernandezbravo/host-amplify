import dynamic from 'next/dynamic';

const Layout = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.layout').then(
      (module) => module.Layout,
    ),
  { ssr: false, loading: () => <></> },
);

export default Layout;
