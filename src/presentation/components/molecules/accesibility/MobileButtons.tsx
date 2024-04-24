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
    <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 items-center justify-center gap-3 pt-3 lg:hidden">
      <div className="flex flex-col justify-start items-center">
        <button onClick={incrementFontSize}>
          <Image
            width={size}
            height={size}
            src={accessibilities[0].src}
            alt={accessibilities[0].alt}
          />
        </button>
        <span className="text-center">Aumentar tamaño del texto</span>
      </div>
      <div className="flex flex-col justify-start items-center">
        <button onClick={decrementFontSize}>
          <Image
            width={size}
            height={size}
            src={accessibilities[1].src}
            alt={accessibilities[1].alt}
          />
        </button>
        <span className="text-center">Disminuir tamaño del texto</span>
      </div>

      <div className="flex flex-col justify-start items-center">
        <button onClick={toggleNegative}>
          <Image
            width={size}
            height={size}
            src={accessibilities[2].src}
            alt={accessibilities[2].alt}
          />
        </button>
        <span className="text-center">Contraste</span>
      </div>
      <div className="flex flex-col justify-start items-center">
        <button onClick={openModal}>
          <Image
            width={size}
            height={size}
            src={accessibilities[3].src}
            alt={accessibilities[3].alt}
          />
        </button>
        <span className="text-center">¿Qué es accesibilidad?</span>
      </div>
    </div>
  );
};

export default MobileButtons;
