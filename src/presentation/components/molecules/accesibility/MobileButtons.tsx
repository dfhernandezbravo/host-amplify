import accessibilities from './assets';
import Image from 'next/image';
import { size } from '.';
import { AccessibilityButton, MobileButtonsWrapper } from './styles';

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
    <MobileButtonsWrapper>
      <div>
        <AccessibilityButton
          onClick={incrementFontSize}
          disabled={fontSize === 'xx-large'}
        >
          <Image
            width={size}
            height={size}
            src={accessibilities.incrementFontSize.src}
            alt={accessibilities.incrementFontSize.alt}
          />
        </AccessibilityButton>
        <span>Aumentar tamaño del texto</span>
      </div>
      <div>
        <AccessibilityButton
          onClick={decrementFontSize}
          disabled={fontSize === 'medium'}
        >
          <Image
            width={size}
            height={size}
            src={accessibilities.decrementFontSize.src}
            alt={accessibilities.decrementFontSize.alt}
          />
        </AccessibilityButton>
        <span>Disminuir tamaño del texto</span>
      </div>
      <div>
        <AccessibilityButton onClick={toggleNegative}>
          <Image
            width={size}
            height={size}
            src={accessibilities.darkMode.src}
            alt={accessibilities.darkMode.alt}
          />
        </AccessibilityButton>
        <span>Contraste</span>
      </div>
      <div>
        <AccessibilityButton onClick={openModal}>
          <Image
            width={size}
            height={size}
            src={accessibilities.questions.src}
            alt={accessibilities.questions.alt}
          />
        </AccessibilityButton>
        <span>¿Qué es accesibilidad?</span>
      </div>
    </MobileButtonsWrapper>
  );
};

export default MobileButtons;
