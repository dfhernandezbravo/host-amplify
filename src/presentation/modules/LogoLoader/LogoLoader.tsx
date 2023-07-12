import { CSSProperties } from 'react';

// Components
import Animation, {
  Props as AnimationProps,
} from '../../components/atoms/Animation';
import { Container } from './LogoLoader.styles';

// Styled component

// Definitions
export type Props = {
  icon?: AnimationProps['name'];
  style?: CSSProperties;
  loop?: boolean;
};

const LogoLoader = (props: Props) => {
  // Props
  const { icon = 'logo-easy', style } = props;

  return (
    <Container>
      <Animation name={icon} style={style} loop={true} />
    </Container>
  );
};

export default LogoLoader;
