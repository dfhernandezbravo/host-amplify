import ModalContent, { Sizes } from './ModalContent';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import DesktopButtons from './DesktopButtons';
import MobileButtons from './MobileButtons';

const Modal = dynamic(() =>
  import('@ccom-easy-design-system/molecules.modal').then(
    (module) => module.Modal,
  ),
);

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
      <div
        className="p-3 h-fit rounded-md bg-white"
        style={{
          border: shouldBeNegative
            ? '1px solid black'
            : '1px solid transparent',
        }}
      >
        <h1
          style={{ fontSize: '1.3em' }}
          className="font-bold pb-2 text-center lg:text-left"
        >
          Accesibilidad
        </h1>
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
      </div>
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
