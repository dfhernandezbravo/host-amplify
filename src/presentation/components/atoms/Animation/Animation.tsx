import { CSSProperties, useEffect, useState } from 'react';
import Lottie from 'lottie-react';

// Animations
import Animations from '../../../assets/animations/list.json';

// Definitions
export type Props = {
  name: keyof typeof Animations;
  loop?: boolean;
  onComplete?: () => void;
  onDestroy?: () => void;
  onLoopComplete?: () => void;
  style?: CSSProperties;
};

// Defaults values
const Defaults = {
  onComplete: undefined,
  onDestroy: undefined,
  onLoopComplete: undefined,
  style: undefined,
};

const Animation = (props: Props) => {
  // Props
  const { name, loop, style, onComplete, onDestroy, onLoopComplete } = props;

  // State
  const [animation, setAnimation] = useState();

  // Methods
  const methods = {
    getAnimation: async () => {
      const json = Animations[name];
      const file = await import(`../../../assets/animations/${json}`);
      if (file) setAnimation(file);
    },
  };

  // On name change
  useEffect(() => {
    methods.getAnimation();
  }, [name]);

  return (
    <Lottie
      animationData={animation}
      loop={loop}
      style={style}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
      onDestroy={onDestroy}
    />
  );
};

Animation.defaultProps = Defaults;

export default Animation;
