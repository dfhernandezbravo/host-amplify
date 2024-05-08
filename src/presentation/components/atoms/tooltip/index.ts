import dynamic from 'next/dynamic';

const Tooltip = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.tooltip').then(
      (module) => module.Tooltip,
    ),
  { ssr: false },
);

export default Tooltip;
