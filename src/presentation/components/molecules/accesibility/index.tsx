import ModalContent, { Sizes } from './ModalContent';
import { useState } from 'react';
import DesktopButtons from './DesktopButtons';
import MobileButtons from './MobileButtons';
import Modal from '../../atoms/modal';
import { AccessibilityWrapper } from './styles';

export const size = 50;

interface Props {
  shouldBeNegative: boolean;
  toggleNegative: () => void;
  incrementFontSize: () => void;
  decrementFontSize: () => void;
  fontSize: string;
}

const Accessibility = ({
  shouldBeNegative,
  toggleNegative,
  incrementFontSize,
  decrementFontSize,
  fontSize,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AccessibilityWrapper isNegative={shouldBeNegative}>
        <h1>Accesibilidad</h1>
        <DesktopButtons
          incrementFontSize={incrementFontSize}
          decrementFontSize={decrementFontSize}
          toggleNegative={toggleNegative}
          openModal={() => setIsOpen(true)}
          fontSize={fontSize}
        />
        <MobileButtons
          incrementFontSize={incrementFontSize}
          decrementFontSize={decrementFontSize}
          toggleNegative={toggleNegative}
          openModal={() => setIsOpen(true)}
          fontSize={fontSize}
        />
      </AccessibilityWrapper>
      <Modal
        title="Accesabilidad"
        isOpen={isOpen}
        setIsOpen={() => setIsOpen((prev) => !prev)}
        isAccessibility={shouldBeNegative}
        width="70%"
      >
        <ModalContent fontSize={fontSize as keyof Sizes} />
      </Modal>
    </>
  );
};

export default Accessibility;
