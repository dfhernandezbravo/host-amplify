import accessibilities from './assets';
import Image from 'next/image';
import { size } from '.';
import Tooltip from '../../atoms/tooltip';

interface Props {
  toggleNegative: () => void;
  incrementFontSize: () => void;
  decrementFontSize: () => void;
  openModal: () => void;
  fontSize: string;
}

const DesktopButtons = ({
  toggleNegative,
  incrementFontSize,
  decrementFontSize,
  openModal,
  fontSize,
}: Props) => (
  <div className="hidden lg:flex gap-2 justify-around">
    <Tooltip
      position="bottom-right"
      text="Aumentar tamaño del texto"
      fontSize={fontSize}
    >
      <button
        onClick={incrementFontSize}
        disabled={fontSize === 'xx-large'}
        className="disabled:opacity-[0.4] disabled:cursor-not-allowed"
      >
        <Image
          width={size}
          height={size}
          src={accessibilities[0].src}
          alt={accessibilities[0].alt}
        />
      </button>
    </Tooltip>
    <Tooltip text="Disminuir tamaño del texto" fontSize={fontSize}>
      <button
        onClick={decrementFontSize}
        disabled={fontSize === 'medium'}
        className="disabled:opacity-[0.4] disabled:cursor-not-allowed"
      >
        <Image
          width={size}
          height={size}
          src={accessibilities[1].src}
          alt={accessibilities[1].alt}
        />
      </button>
    </Tooltip>
    <Tooltip text="Contraste" fontSize={fontSize}>
      <button onClick={toggleNegative}>
        <Image
          width={size}
          height={size}
          src={accessibilities[2].src}
          alt={accessibilities[2].alt}
        />
      </button>
    </Tooltip>
    <Tooltip
      position="bottom-left"
      text="¿Qué es accesibilidad?"
      fontSize={fontSize}
    >
      <button onClick={openModal}>
        <Image
          width={size}
          height={size}
          src={accessibilities[3].src}
          alt={accessibilities[3].alt}
        />
      </button>
    </Tooltip>
  </div>
);

export default DesktopButtons;
