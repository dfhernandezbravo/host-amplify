import Image from 'next/image';
import accessibilities from './assets';

const size = 50;

interface Props {
  shouldBeNegative: boolean;
  toggleNegative: () => void;
  incrementFontSize: () => void;
  decrementFontSize: () => void;
  openModal: () => void;
}

const Accessibility = ({
  shouldBeNegative,
  toggleNegative,
  incrementFontSize,
  decrementFontSize,
  openModal,
}: Props) => {
  return (
    <div
      className="p-3 h-fit rounded-md bg-white"
      style={{ filter: shouldBeNegative ? 'invert(1)' : '' }}
    >
      <h1 className="font-bold py-2 text-lg">Accesibilidad:</h1>
      <span className="flex gap-2">
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
      </span>
    </div>
  );
};

export default Accessibility;
