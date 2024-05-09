import accessibilities from './assets';
import Image from 'next/image';
import { size } from '.';
import Tooltip from '../../atoms/tooltip';
import { AccessibilityButton, DesktopButtonsWrapper } from './styles';

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
  <DesktopButtonsWrapper>
    <Tooltip
      position="bottom-right"
      text="Aumentar tamaño del texto"
      fontSize={fontSize}
    >
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
    </Tooltip>
    <Tooltip text="Disminuir tamaño del texto" fontSize={fontSize}>
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
    </Tooltip>
    <Tooltip text="Contraste" fontSize={fontSize}>
      <AccessibilityButton onClick={toggleNegative}>
        <Image
          width={size}
          height={size}
          src={accessibilities.darkMode.src}
          alt={accessibilities.darkMode.alt}
        />
      </AccessibilityButton>
    </Tooltip>
    <Tooltip
      position="bottom-left"
      text="¿Qué es accesibilidad?"
      fontSize={fontSize}
    >
      <AccessibilityButton onClick={openModal}>
        <Image
          width={size}
          height={size}
          src={accessibilities.questions.src}
          alt={accessibilities.questions.alt}
        />
      </AccessibilityButton>
    </Tooltip>
  </DesktopButtonsWrapper>
);

export default DesktopButtons;
