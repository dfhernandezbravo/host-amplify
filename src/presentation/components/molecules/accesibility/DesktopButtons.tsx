/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from 'next/dynamic';
import accessibilities from './assets';
import Image from 'next/image';
import { size } from '.';

// @ts-expect-error
const Tooltip = dynamic(() =>
  import('@ccom-easy-design-system/atoms.tooltip').then(
    (module) => module.Tooltip,
  ),
);

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
      <button onClick={incrementFontSize}>
        <Image
          width={size}
          height={size}
          src={accessibilities[0].src}
          alt={accessibilities[0].alt}
        />
      </button>
    </Tooltip>
    <Tooltip
      position="bottom-right"
      text="Disminuir tamaño del texto"
      fontSize={fontSize}
    >
      <button onClick={decrementFontSize}>
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
    <Tooltip text="¿Qué es accesibilidad?" fontSize={fontSize}>
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
