import { CSSProperties } from 'react';

// Components
import Animation, { Props as AnimationProps } from '../../atoms/Animation';

// Definitions
export type Props = {
  icon?: AnimationProps['name'];
  style?: CSSProperties;
  loop?: boolean;
};

const LogoLoader = (props: Props) => {
  // Props
  const { icon = 'logo-easy', style, loop = true } = props;

  return (
    <div
      style={{
        zIndex: 99999,
        width: '100dvw',
        height: '100dvh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Animation name={icon} style={style} loop={loop} />
    </div>
  );
};

export default LogoLoader;
