import accessibilities from './assets';
import Image from 'next/image';
import { size } from '.';

interface Props {
  toggleNegative: () => void;
  incrementFontSize: () => void;
  decrementFontSize: () => void;
  openModal: () => void;
  fontSize: string;
}

const MobileButtons = ({
  toggleNegative,
  incrementFontSize,
  decrementFontSize,
  openModal,
  fontSize,
}: Props) => {
  return (
    <div className="flex gap-2 justify-around pt-3 lg:hidden">
      <button onClick={incrementFontSize}>
        <Image
          width={size}
          height={size}
          src={accessibilities[0].src}
          alt={accessibilities[0].alt}
        />
      </button>
      <button onClick={decrementFontSize}>
        <Image
          width={size}
          height={size}
          src={accessibilities[1].src}
          alt={accessibilities[1].alt}
        />
      </button>
      <button onClick={toggleNegative}>
        <Image
          width={size}
          height={size}
          src={accessibilities[2].src}
          alt={accessibilities[2].alt}
        />
      </button>
      <button onClick={openModal}>
        <Image
          width={size}
          height={size}
          src={accessibilities[3].src}
          alt={accessibilities[3].alt}
        />
      </button>
    </div>
  );
};

export default MobileButtons;
